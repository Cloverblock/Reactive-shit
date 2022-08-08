import React, {Component} from "react";
import PropTypes from "prop-types";


const node = document.getElementById('root');
class Post extends Component {
  render() {
    return React.createElement (
      'div',
      {
        className: 'post' //Пиздец, столько сложностей, чтобы просто создать div как элемент с классом
                          //Неужели и в нормальных проектах также сложно всё
      },
      React.createElement(
        'h2',
        {
          className: 'postAuthor',
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          'span',
          {
            className: 'postBody'
          },
          this.props.content
        ),
        this.props.children
      )
    );
  }
}

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      user:''
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserChange(event) {
    const val = event.target.value;
    this.setState(() => ({
      user: val
    }));
  }
    handleTextChange(event) {
      const val = event.target.value;
      this.setState(() => ({
        content: val
      }));
    }
    handleSubmit(event) {
      event.preventDefault();
      this.props.onCommentSubmit({
        user: this.state.user.trim(),
        content: this.state.content.trim()
      });
      this.setState(() => ({
        user:'',
        content: ''
      }));
    }

    render() {
      return React.createElement (
        'form',
        {
          className: 'createComment',
          onSubmit: this.handleSubmit
        },
        React.createElement('input', {
          type:'text',
          placeholder: 'Ваше имя',
          value: this.state.user,
          onChange: this.handleUserChange
        }),
        React.createElement('input', {
          type: 'text',
          placeholder:'Комментарий',
          value: this.state.content,
          onChange: this.handleTextChange
        }),
        React.createElement('input', {
          type: 'submit',
          value:'Публикация'
        })
      );
    }
  }
CreateComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  content: PropTypes.string
};

    class Comment extends Component {
      render() {
        return React.createElement (
          'div',
          {
            className: 'comment'
          },
          React.createElement(
            'p',
            {
              className: 'commentAuthor',
              id: this.props.user
            },
            this.props.user,
            React.createElement(
              'span',
              {
                className: 'commentContent',
                id: this.props.user
              },
              this.props.content
            )
          )
        );
  }
}

const ReactDOM = require('react-dom') 

Post.propTypes = {
  user: PropTypes.string.isRequired,  
  content: PropTypes.string.isRequired, 
  id: PropTypes.number.isRequired       
};

Comment.propTypes ={
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

const App = React.createElement(CreateComment);

const data = {
  post: {
    id: 123,
    content:': "Да не боись, не ебанёт" - Роберт Оппенгеймер',
    user: 'Samuel Jackson'
  },
  comments: [
    {
      id: 0,
      user: 'DaiVinci',
      content: ': Глубоко',
    },
    {
      id: 1,
      user: 'Нагибатор228',
      content: ': Я ебу собак',
    },
    {
      id: 2,
      user: 'ТвояМама',
      content: ': @Нагибатор228 Всегда готов',
    },
    {
      id: 3,
      user: 'РыжийБог',
      content: ': @ТвояМама трахнуть сразу несколько котов',
    },
    {
      id: 4,
      user: 'ЧоткийПоцык',
      content: ': Долбоебы бля',
    },
  ],
};

class CommentBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  handleCommentSubmit(comment) {
    const comments = this.state.comments;
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState ({
      comments:newComments
    });
  }
  render(){
    return React.createElement (
      'div',
      {
        className: 'commentBox'
      },
      React.createElement(Post, {
        id: this.props.post.id,
        content: this.props.post.content,
        user: this.props.post.user
      }),
      this.state.comments.map(function(comment){
        return React.createElement(Comment, {
          key: comment.id,
          id: comment.content,
          content: comment.content,
          user: comment.user
        });
      }),
      React.createElement(CreateComment, {
        onCommentSubmit: this.handleCommentSubmit
      })
    );
  }
}
CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};


ReactDOM.render(
  React.createElement(CommentBox, {
    comments: data.comments,
    post: data.post
  }),
  node
)
