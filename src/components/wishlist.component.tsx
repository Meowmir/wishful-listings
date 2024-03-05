export default function WishList({ list } : { list: string[]}) {

  return (
    <>
      <h3>Wish List</h3>
      <ol>
        { list.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ol>
  </>
  )
}
