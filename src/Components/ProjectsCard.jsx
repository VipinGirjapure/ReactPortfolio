import { Col } from "react-bootstrap";

const ProjectsCard = ({id,title,description,imgUrl}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="project-imgbox">
                <img src={imgUrl} alt='project'/>
                <div className="project-text">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectsCard;