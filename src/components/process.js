import React from 'react'

class Process extends React.Component {

  render() {
    return (
      <section className={this.props.sectionclassName}> 
        <div className="flexCol summaryStyles">
          <h3 className="boldStyles">{this.props.title}</h3>
          {this.props.copy}
        </div>
        <div className={this.props.imageclassName}>
          {this.props.image}
        </div>
      </section>
    );
  }
}

export default Process;