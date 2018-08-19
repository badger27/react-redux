import React, {PropTypes} from 'react';
import {connect} from  'react-redux';
import * as courseActions from  '../../actions/courseActions';
import {bindActionCreators} from  'redux';


class CoursesPage extends React.Component{

  constructor(props, context){
    super(props, context);
    console.log('context', context);
    console.log('props', props);
    console.log('this', this.state );
    console.log('this.props.courses:',this.props.courses);
    this.state = {
       course: {title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    console.log('onTitleChnage', event);
    const course = this.state.course;
    console.log('course ', course );
    course.title = event.target.value;
    this.setState({course:course});
  }

  onClickSave(){
    this.props.actions.createCourse(this.state.course);
}

courseRow(course, index){
    return <div key={index}>{course.title} </div>
}

  render(){
    return (
      <div>
       <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>

        <input
        type="text"
        onChange = {this.onTitleChange}
        value={this.state.course.title}
        />

        <input
          type="text"
          value ="Save"
          onClick = {this.onClickSave}
        />
      </div>
    );
  }
}

CoursesPage.propTypes ={
  courses:PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);


