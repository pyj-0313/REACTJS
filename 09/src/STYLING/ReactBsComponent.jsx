import "./ReactBsComponent.scss"
import Button from 'react-bootstrap/Button';

const ReactBsComponent = () => {

    return (
        <div>
            <h2> REACT's BS5 COMPONENT 확인</h2>
            <div>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>

            </div>

        </div>
    )

}

export default ReactBsComponent;