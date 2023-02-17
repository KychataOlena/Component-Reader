import { Component } from 'react';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  render() {
    // console.log(this.props.items[this.state.index]);
    const { index } = this.state;
    const { items } = this.props;
    const { totalItems } = items.length;
    const currentItem = items[index];

    return (
      <div>
        <section>
          <button
            type="button"
            disabled={index === 0}
            onClick={() => this.changeIndex(-1)}
          >
            Назад
          </button>
          <button
            type="button"
            disabled={index + 1 === items.length}
            onClick={() => this.changeIndex(1)}
          >
            Вперед
          </button>
        </section>

        <p>
          {index + 1}/{items.length}
        </p>

        <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article>
      </div>
    );
  }
}
