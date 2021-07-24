import React from "react"
import agent from "../agent"
import { connect } from "react-redux"

// create foprm page for creating posts, editing and deleting posts

const mapStateToProps = state => ({}) 
const mapDispatchToProps = props => ({

  onChangeTitle:  value => 
    dispatch ({type: 'UPDATE_ARTICLE_FIELDS', key: 'title', value}),
  
  onChangeDescription: value =>
    dispatch ({type: 'UPDATE_ARTICLE_FIELDS', key: 'description', value}),

  onSubmitForm: (title, description) => value => 
    dispatch ({type: "CREATE_ARTICLE", payload: agent.Articles.createArticle(title, description)})
})

class ArticleForm extends React.Component {

  constructor () {
    this.onChangeTitle = event => this.props.onChangeTitle(event.target.value)

    this.onChangeDescription = event => this.props.onChangeDescription(event.target.value)
    
    this.onSubmitForm = (title,description) => event => {
      event.preventDefault(),
      this.props.onSubmitForm(title, description)
    }
  }

  render () {
    const {title, description} = this.props;
    return (

      <div>

          <form onSubmit={this.SubmitForm(title,description)} >

            <a> Title </a>
            <input type = "string" id= "title" onChangeTitle = {/* TODO: add a onChange function */} />

            <a> Description </a>
            <input type = "string" id= "description" onChangeDescription= {/* TODO: add a onChange function */} />

            <button className="btn btn-lg btn-primary pull-xs-right" type = "submit" > 
              Create a Post
            </button>
          </form>
      </div>
    )
  }
}

export default connect(mapDispatchToProps, mapStateToProps) (ArticleForm);
