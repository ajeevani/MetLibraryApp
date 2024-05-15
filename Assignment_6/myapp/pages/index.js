/*********************************************************************************
* WEB422 – Assignment 6
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name: Arman Jeevani ID: 158510180 Date: 13 April 2024
*
* Vercel App (Deployed) Link: 
*********************************************************************************/
import { Image, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" fluid rounded alt="Metropolitan Museum of Art" />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <p>
                        The Museum's two-million-square-foot building has vast holdings that represent a series of collections, each of which ranks in its category among the finest in the world. The American Wing, for example, houses the world's most comprehensive collection of American paintings, sculpture, and decorative arts, presently including 24 period rooms that offer an unparalleled view of American history and domestic life.
                    </p>
                    <p>
                        Other major collections belonging to the Museum include arms and armor, Asian art, costumes, European sculpture and decorative arts, medieval and Renaissance art, musical instruments, drawings, prints, antiquities from around the ancient world, photography, and modern and contemporary art. More than a million objects are on view from every corner of the world. Major galleries that in recent years have either been newly created or have undergone renovation and reinstallation include: the Greek and Roman Galleries, Galleries for Oceanic Art and the Gallery for Native North American Art, Galleries for 19th- and Early 20th-Century European Paintings and Sculpture including the new Henry J.
                    </p>
                </Col>
                <Col md={6}>
                    <p>
                        Families and children of all ages have fun while they are learning about art in a wide variety of programs and events scheduled daily in the Museum's galleries and classrooms. These programs include workshops, tours, lectures, film showings, and more. Many programs are designed to accompany temporary special exhibitions.
                    </p>

                    <Link href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art</Link>

                </Col>
            </Row>
        </div>
    );
};
