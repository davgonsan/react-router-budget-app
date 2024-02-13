// rrd imports
import { useLoaderData } from "react-router-dom";

// library import
import { toast } from "react-toastify";

// component imports
import Table from "../components/Table";

// helpers
import { deleteItem, fetchData } from "../helpers";

// loader
export async function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

// action
export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("¡Gasto eliminado!");
    } catch (e) {
      throw new Error("Hubo un problema al eliminar su gasto.");
    }
  }
}

const ExpensesPage = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1>Todos los gastos</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Gastos Recientes <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>Sin gastos para mostrar</p>
      )}
    </div>
  );
};

export default ExpensesPage;
