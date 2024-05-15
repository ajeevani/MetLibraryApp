import { useAtom } from "jotai";
import { useEffect } from "react";
import { favouritesAtom } from "@/store";
import { Row, Col, Card } from "react-bootstrap";
import ArtworkCard from "@/components/ArtworkCard";

const Favourites = () => {
    const [favouritesList] = useAtom(favouritesAtom);
    useEffect(() => {
        console.log(favouritesList);
    }, [favouritesList]);
    return (
        <div>
            {favouritesList === undefined ? null : (
                favouritesList.length === 0 ? (
                    <Card>
                        <Card.Body>
                            <h4>Nothing Here</h4>
                            Try adding some new artwork to the list.
                        </Card.Body>
                    </Card>
                ) : (
                    <Row className="gy-4">
                        {favouritesList.map((objectID) => (
                            <Col lg={3} key={objectID}>
                                <ArtworkCard objectID={objectID} />
                            </Col>
                        ))}
                    </Row>
                )
            )}
        </div>
    );
};

export default Favourites;
