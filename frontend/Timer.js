//import react, {component} from 'react'
//class Timer extends component {
//    constructor(props) {
//        super(props)
//        this.state = {
//            count: 0
//        }
//    }

//    render () {
//        const count = this.state
//        return (
//        <div>
//            <h2>StopWatch: {count}</h2>
//        </div>
//        )
//    }
    
//    componentDidMount(){
//      this.myInterval = setInterval(() => {
//        this.setState(prevState => ({
//          count: prevState.count + 1
//        }))
//      }, 5000)
//    }

//    componentWillUnmount(){
//      clearInterval(this.myInterval)
//    }
//}

//export default Timer 