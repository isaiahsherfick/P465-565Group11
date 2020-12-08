import React, {useState, useEffect} from 'react'
import Header from './Header'
import './currency.css'
import { Link } from 'react-router-dom';

class CurrencyConversion extends React.Component {
  
    render() {
      return (
          <div>

        <Header/>
        <div class="main ui text container stylediv">
  
   <div class="ui dividing centered header stylediv"> 
     <h1 class='styleh1'>Currency Converter</h1>
     <h2 class='styleh2'>
       {/* <i class="fa fa-dollar stylei" style={{color: "#ffb3ba"}}></i>
       <i class="fa fa-gbp stylei" style={{color:"#bae1ff"}}></i>
       <i class="fa fa-eur stylei" style={{color:"#c6acc7wh"}}></i> */}
     </h2>
  </div>
  
   {/* <div id="app" </div> */}
   <CurrencyConverter/>
   <Link to='/book'>

   <button type="submit">
        Pay
      </button>
   </Link>

</div>
</div>

      )  
    }  
  }
  
  class CurrencyConverter extends React.Component {
    constructor() {
      super();
      
      this.state = {
        baseCurrency:'USD',
        convertToCurrency:'INR',
        baseAmount: 100,
        rates: [],
        currencies: []
      };
      
      this.changeBaseCurrency = this.changeBaseCurrency.bind(this);
      this.changeConvertToCurrency = this.changeConvertToCurrency.bind(this);
      this.changeBaseAmount = this.changeBaseAmount.bind(this);
      this.getConvertedCurrency = this.getConvertedCurrency.bind(this);
      this.callAPI = this.callAPI.bind(this);
    }
    
    componentDidMount() {
     this.callAPI(this.state.baseCurrency)
    }
    
    changeBaseCurrency(e) {
      this.setState({ baseCurrency: e.target.value});
      this.callAPI(e.target.value)
      
    }
    
   callAPI(base) {
     const api = `https://api.exchangeratesapi.io/latest?base=${base}`;
      
      fetch(api)
       .then(results => {
          return results.json();
      }).then(data => this.setState({
        rates: data['rates'],
        currencies: Object.keys(data['rates']).sort()
      }));
     
   } 
    
    
    changeConvertToCurrency(e) {
      this.setState({
        convertToCurrency: e.target.value
      });
    }
    
    changeBaseAmount(e) {
     this.setState({
       baseAmount: e.target.value
     });
    }
    
    getConvertedCurrency(baseAmount,convertToCurrency,rates) {
        return Number.parseFloat(baseAmount * rates[convertToCurrency]).toFixed(3);
    }
    
    render() {
      const {currencies,rates,baseCurrency,baseAmount,convertToCurrency} = this.state;
      
      const currencyChoice = currencies.map(currency =>
        <option key={currency} value={currency}> {currency} </option>      
      );
                                            
      const result = this.getConvertedCurrency(baseAmount, convertToCurrency, rates);
      
      
      return(
        <div className="styleform-container stylediv">
          <form className='ui mini styleform'>
          
           <p>Convert from: {baseCurrency}</p>
            <select  value={baseCurrency} onChange={this.changeBaseCurrency}>
              {currencyChoice}
              <option>{baseCurrency}</option>
            </select>
          
            <p>Convert to: {convertToCurrency}</p>
            <select value={convertToCurrency} onChange={this.changeConvertToCurrency}>
              {currencyChoice}
            </select>
          
           <p>Amount:</p>
             <input type='number' 
                    id='base-amount' 
                    defaultValue={baseAmount} 
                    onChange={this.changeBaseAmount}>
            </input>                             
         </form>                       
         <h4 id='result-text'>{baseAmount} {baseCurrency} is equal to {result} {convertToCurrency}</h4>
       </div>
      );
    }
  }
  
export default CurrencyConversion
//   ReactDOM.render(
//     <App />,
//     document.getElementById('app')
//   );