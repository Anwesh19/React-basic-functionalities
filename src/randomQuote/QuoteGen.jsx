import React from 'react'

const QuoteGen = () => {
    const quotes = [
        "Lorem ipsum dolor sit amet consectetur ",
        "adipisicing elit. Voluptate, assumenda!",
        "Pariatur saepe tempore atque expedita" ,
        "voluptate cupiditate corporis dolor amet ",
        "fugiat exercitationem aut accusantium, distinctio ",
        "ex voluptatum voluptas optio ipsa magnam obcaecati",
        "nisi quidem cum officia praesentium ullam nulla?" ,
        "Eveniet error ipsam voluptate rerum nisi accusamus ",
        "sequi repellat, nam quisquam?"
    ]
    const random =Math.floor(Math.random()*quotes.length)
    const quote = quotes[random];
  return (
    <div>{quote}</div>
  )
}

export default QuoteGen