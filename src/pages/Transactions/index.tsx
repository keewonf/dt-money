import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";
import { useState } from "react";

export function Transactions() {
  const [currentPage, setCurrentPage ] = useState(1)

  function handleChangePage(page: number) {
    if(page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const itemsPerPage = 10
  const totalPages = Math.ceil(transactions.length / itemsPerPage)

  const start = (currentPage - 1) * itemsPerPage
  const end = currentPage * itemsPerPage

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.slice(start, end).map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
      <Pagination currentPage={currentPage} onPageChange={handleChangePage} totalPages={totalPages}/>
    </div>
  );
}
