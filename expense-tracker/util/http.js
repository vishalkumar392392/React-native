import axios from "axios";

const BASIC_URL = "https://vishaltest-df88c-default-rtdb.firebaseio.com/";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(`${BASIC_URL}/expenses.json`, expenseData);
  return response.data.name;
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${BASIC_URL}/expenses.json`);

  const expenses = [];
  for (let key in response.data) {
    expenses.push({
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    });
  }
  return expenses;
};

export const updateExxpense = (id, expenseData) => {
  return axios.put(BASIC_URL + `/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
  return axios.delete(BASIC_URL + `/expenses/${id}.json`);
};
