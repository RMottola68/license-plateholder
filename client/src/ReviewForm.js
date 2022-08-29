import {useState} from "react"
import { Container, Row, Col } from "react-bootstrap";
function ReviewForm({setReviews, reviews}){
    const [values, setValues] = useState({
        title:"",
        content:"",
        user_id: ""
    })

    function handleSubmit(event){
        event.preventDefault()
        console.log(values)
        event.target.reset()
        setReviews(reviews=>[...reviews,values])
        fetch('/reviews',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
        })
        .then(data => {
            if (!data.ok) {
              throw Error(data.status);
             }
             return data.json();
            }).then(update => {
            console.log(update);
            
            }).catch(e => {
            console.log(e);
        })
    }
    
    console.log(values)
    
    
    
    const handleTitle = (event) => {
        setValues({...values, title: event.target.value})
    }
    
    
    const handleContent = (event) => {
        setValues({...values, content:event.target.value})
    }
    const handleUserId = (event) => {
        setValues({...values, user_id:event.target.value})
    }
    

    return(
        <Container style={{marginTop: "150px", height: "100vh", width: "100vw"}}>
            <Row>
                <Col></Col>
                <Col className=" bg-light border border-5 border-danger justify-contents-center " style={{marginTop: "150px", borderRadius: "30px"}}>
                    <div className="form-container text-center" >
                        <label className="reviewsHeader "><h1>Leave a Review</h1></label>
                        
                        <form className="reviews-form" onSubmit={handleSubmit} style={{margin:"30px", borderRadius: "30px"}}>
                        <div className="titleBox"> <input
                                onChange={handleTitle}
                                value={values.title}
                                className="form-field"
                                placeholder="Title"
                                name="reviewTitle" />
                            </div>
                            
                            <div className="contentBox">
                            <input 
                                onChange={handleContent}
                                value={values.content}
                                className="form-field"
                                placeholder="Content"
                                name="reviewContent"/>
                            </div>
                            <div>
                            <input 
                                onChange={handleUserId}
                                value={values.user_id}
                                className="user_id"
                                placeholder="user_id"
                                name="reviewUser_id"/>
                            </div>
                            
                            <input className="submit" type="submit"/>
                        </form>
                        
                    </div>
                </Col>    
                <Col></Col>        
            </Row>
        </Container>
    )
    

}
    
export default ReviewForm;