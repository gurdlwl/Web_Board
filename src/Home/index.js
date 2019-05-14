import React, {Component} from 'react';

class Home extends Component {
    state = {
        boards:[
            {
                no: 1,
                title:'2018학년도 교원능력개발평가 운영결과보고서',
                writer:'나요섭',
                date: new Date()
            },
            {
                no: 2,
                title:'2018학년도 교원능력개발평가 운영결과보고서',
                writer:'나요섭',
                date: new Date()
            },
            {
                no: 3,
                title:'2018학년도 교원능력개발평가 운영결과보고서',
                writer:'나요섭',
                date: new Date()
            }
        ]
    };

    render() {
        let {boards} = this.state;

        return (
            <div>
                <table border="0">
                    <tbody align="center">
                    <tr>
                        <td width="100px;">번호</td>
                        <td width="600px;">제목</td>
                        <td width="200px;">작성자</td>
                        <td width="300px;">작성일</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;