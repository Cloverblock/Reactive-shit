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
        'h1',
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

    class Comment extends Component {
      render() {
        return React.createElement (
          'div',
          {
            className: 'comment'
          },
          React.createElement(
            'h2',
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

const ReactDOM = require('react-dom') //Вот этой херни быть здесь не должно(даже в книге нет), но без нее выдает ошибку на последней строке

Post.propTypes = {
  user: PropTypes.string.isRequired,    //Тут впринципе всё понятно, только не понятно как запомнить все это
  content: PropTypes.string.isRequired, // Типо вот эти 3 строки мне ясно как работают, но если дело дойдет до нормальной работы
  id: PropTypes.number.isRequired       // То я писю пососу и не вспомнию что вот так вот всё пишется
};

Comment.propTypes ={
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

const App = React.createElement(Post, {
  id: 1,
  content: ' сказал: Я ебал меня сосали!',
  user: 'Хуюзер' // Такой же прикол, что и в коменте выше
},
React.createElement(Comment, {
  id: 2,
  user: 'Бомжузер ',
  content: 'прокомментировал: А меня забыли ((('
})
);


ReactDOM.render(App, node);
