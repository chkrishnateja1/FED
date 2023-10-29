import React,{Component} from 'react'
class TabularForm extends Component{
    constructor(props){
        super(props);
        this.state={
            studentdetails:[
                {sid:501,sname:'Madhavi',technology:'Full Stack Developer'},
                {sid:502,sname:'Rama',technology:'Java Developer'},
                {sid:503,sname:'Sushma',technology:'Django Developer'},
            ]
        }

    }
    render(){
        const {studentdetails}=this.state;
        return(
            <div>
                <table>
                    <tr>
                        <th>StudentNo</th>
                        <th>StudentName</th>
                        <th>Technology</th>
                    </tr>
                    {studentdetails.length>0 && studentdetails.map((student)=>{
                        return <tr key={student.sid}>
                            <td>{student.sid}</td>
                            <td>{student.sname}</td>
                            <td>{student.technology}</td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}
export default TabularForm;