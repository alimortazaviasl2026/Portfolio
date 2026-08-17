import Avatar from "@mui/material/Avatar"
import Rating from "@mui/material/Rating"
import Typography from "@mui/material/Typography"
import { Card } from "react-bootstrap"

function CommentBox({id , title , des , rate , user , role , img}) {
  return (
    <Card className="text-start border-0 shadow  ">
        <Card.Body>
             <Rating name="read-only" size="small" value={rate} readOnly/>
             <Card.Title className="fontSize13 my-2">{title}</Card.Title>
             <Card.Text className="fw-light lh-lg  fontSize14 text-center" style={{color:'var(--grayLow)'}}>
                 {
                  des
                 }
             </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex gap-3 align-items-center border-0">
            <Avatar  src={img}/>
            <div className="">
                 <Card.Title className="fw-medium fontSize14">{user}</Card.Title>
                <Card.Subtitle className="fw-light fontSize13" style={{color:'var(--grayLow)'}}>{role}</Card.Subtitle>
            </div>
        </Card.Footer>
    </Card>
  )
}

export default CommentBox
