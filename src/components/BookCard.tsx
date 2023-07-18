

export default function BookCard({book} : any) {
    function truncateTitle(title: string): string {
        return title.length > 15 ? `${title.slice(0, 15)}...` : title;
      }
  return (
    <div
      className="border hover:shadow-lg p-4 rounded min-h-[200px] grid justify-between items-end"
    >
      <h3 className="text-3xl">{truncateTitle(book.title)}</h3>
      <div>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>{book.publicationDate}</p>
      </div>
    </div>
  );
}
