import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7daysAgo && expense.date <= today;
  });

  // useEffect(() => {
  //   const getExpenses = async () => {
  //     const expenses = await fetchExpenses();
  //     expensesCtx.setExpenses(expenses);
  //   };

  //   getExpenses();
  // }, []);

  useFocusEffect(
    useCallback(() => {
      const getExpenses = async () => {
        try {
          const expenses = await fetchExpenses();
          expensesCtx.setExpenses(expenses);
        } catch (error) {
          setError("Could not fetch");
        }
        setIsFetching(false);
      };

      getExpenses();
    }, [])
  );

  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={() => setError(null)} />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={"Last 7 Days"}
      fallBackText="No expenses registered for last 7 days."
    />
  );
};

export default RecentExpenses;
