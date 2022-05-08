import { FlatList, Text } from "react-native";

const renderExpense = (itemData) => {
  return <Text>{itemData.item.description}</Text>;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpense}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
