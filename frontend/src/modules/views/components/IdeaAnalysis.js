import React, {Component} from 'react'
import cookie from 'react-cookies'
import { Link } from 'react-router-dom'

class IdeaAnalysis extends Component {
  state = {
    idea_results: [],
  }

  Analysis(nextEndpoint){
      let endpoint = '/api/app/idea/698/deep_analysis/'
      
      if (nextEndpoint !== undefined) {
          endpoint = nextEndpoint
      }
      let thisComp = this
      let lookupOptions = {
          method: "GET",
          headers: {
              'Content-Type': 'application/json'
          }
      }
      const csrfToken = cookie.load('csrftoken')
      if (csrfToken !== undefined) {
          lookupOptions['credentials'] = 'include'
          lookupOptions['headers']['X-CSRFToken'] = csrfToken
       }

      fetch(endpoint, lookupOptions)
      .then(function(response){
          return response.json()
      }).then(function(responseData){
          console.log(responseData)
          thisComp.setState({
            idea_results: responseData
            
          })

      }).catch(function(error){
          console.log("error", error)
      })
  }

  componentDidMount(){
    this.setState({
      idea_results: []
    })
    this.Analysis()
  }


  

  render(){
    const {idea_results} = this.state
    return (
        
      <div>
          <h3>Analysis IDEA</h3>
          <table>
            <tbody>
              {idea_results.map((item, i) => (
                  <tr key={i}>
                      <td>{item.competition}</td>
                      <td>{item.current_model}</td>
                      <td>{item.keyword_text}</td>
                      <td>{item.search_volume}</td>
                  </tr>
              ))}
            </tbody>
          </table>
      </div>
      


    );
  }

}

export default IdeaAnalysis