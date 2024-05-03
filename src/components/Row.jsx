import React from "react";

const Row = ({coin}) => {
    console.log('coin:', coin)
    
  return (
    <tr className="padding_class">
      <td id="first_cell">
        <div>
          <img src={coin.image} alt="img" />
        </div>
        <span>${coin.id.charAt(0).toUpperCase() + coin.id.slice(1)}</span>
      </td>
      <td>${coin.symbol.toUpperCase()}</td>
      <td className="text_align_end">${"$" + coin.current_price}</td>
      <td className="text_align_end">${"$" + coin.total_volume}</td>
      <td
        className="text_align_end padding_left"
        id={coin.price_change_percentage_24h > 0 ? "green_text" : "red_text"}
      >
        {coin.price_change_percentage_24h + "%"}
      </td>
      <td id="last_cell" className="text_align_end">
        Mkt Cap:${"$" + coin.market_cap}
      </td>
    </tr>
  );
};

export default Row;
