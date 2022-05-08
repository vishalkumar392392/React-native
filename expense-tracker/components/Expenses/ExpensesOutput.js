import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_DATA = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("09-05-2022"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("09-05-2022"),
  },
  {
    id: "e3",
    description: "Some Bananas",
    amount: 5.99,
    date: new Date("09-12-2021"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("09-12-2021"),
  },
  {
    id: "e5",
    description: "A Movie ticket",
    amount: 18.99,
    date: new Date("09-12-2021"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_DATA} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_DATA} />
    </View>
  );
};

export default ExpensesOutput;
