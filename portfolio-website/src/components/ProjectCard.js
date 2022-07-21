import { Col } from 'react-bootstrap'

export const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col className='project-card' sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="project" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a target="_blank" rel='noreferrer' href={url}>Click Me</a>
                </div>
            </div>
        </Col>
    )
}