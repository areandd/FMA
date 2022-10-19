import React from 'react'
import './IndividualStocks.css';

const IndividualStocks = () => {
  return (
    <div className='wrapper2'>
        <div className="header-container">
          <h1 className='stock-ticker'>AAPL</h1>
          <div className='btn-container'>
            <button className='watch-btn'>Watch</button>
          </div>
        </div>
        <div className='container2'>This is a chart for a stock</div>
        <div className='data-container'>
          <table>
            <thead>
              <tr>
                <th colSpan={4}>Statistics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                <td className='td-right'>266.92</td>
                <td>Sector</td>
                <td className='td-right'>Technology</td>
              </tr>
              <tr>
                <td>Industry</td>
                <td className='td-right'>Software - Applications</td>
                <td>Market Capitalization</td>
                <td className='td-right'>$2.6 Billion</td>
              </tr>
              <tr>
                <td>Dividend Yield</td>
                <td className='td-right'>3.5%</td>
                <td>Dividend Date</td>
                <td className='td-right'>12/18</td>
              </tr>
              <tr>
                <td >52 Week High</td>
                <td className='td-right' >$300</td>
                <td >52 Week Low</td>
                <td className='td-right' >$10</td>
              </tr>
              <tr>
                <td>Avg Vol</td>
                <td className='td-right'>$1 Mill</td>
                <td>Vol</td>
                <td className='td-right'>$895K</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className='td-foot' colSpan={4}>Data delayed by 1 day.</td>
              </tr>
            </tfoot>
          </table>
        </div>
    </div>
  )
}

export default IndividualStocks