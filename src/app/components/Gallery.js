import ListGroup from 'react-bootstrap/ListGroup';

export default function Gallery({ photos, isLoading }) {
    return (
        <ListGroup as="ul" horizontal>
            {photos.map(photo => (
                <ListGroup.Item as="li" key={photo.id}>
                    <a href={photo.urls.full} target="_blank">
                        <img src={photo.urls.small} alt={photo.alt_description} />
                    </a>

                    <div className="photodescr">
                        <p className="photoinfo">
                            Date: {new Date(photo.created_at).toLocaleString()}
                            <br />
                            <span>
                                Author: <i>{photo.user.name}</i>
                            </span>
                            <br />
                            Resolution (W/H): {photo.width}px / {photo.height}px
                        </p>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
