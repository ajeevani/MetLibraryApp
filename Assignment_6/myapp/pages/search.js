import { useRouter } from "next/router";
import { addToHistory } from "@/lib/userData";
import { searchHistoryAtom } from "@/store";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";

const AdvancedSearch = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { searchQuery: "", searchBy: "title", geoLocation: "", medium: "", isHighlight: false, isOnView: false, },
    });

    const router = useRouter();
    const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

    const submitForm = async (data) => {
        let queryString = "";
        queryString += `${encodeURIComponent(data.searchBy)}=true`;
        queryString += data.geoLocation ? `&geoLocation=${encodeURIComponent(data.geoLocation)}` : "";
        queryString += data.medium ? `&medium=${encodeURIComponent(data.medium)}` : "";
        queryString += `&isOnView=${data.isOnView || false}`;
        queryString += `&isHighlight=${data.isHighlight || false}`;
        queryString += `&q=${encodeURIComponent(data.searchQuery)}`;

        router.push("/artwork?" + queryString);
        const updatedHistory = await addToHistory(queryString);
        setSearchHistory(updatedHistory);

        console.log(searchHistory);
    };

    return (
        <div className="mt-5">
            <Form onSubmit={handleSubmit(submitForm)}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Search Query</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                name="q"
                                {...register("searchQuery", { required: true })}
                            />
                            {errors.searchQuery?.type === "required" && (
                                <span className="is-invalid">This field is required.</span>
                            )}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Label className="form-label">Search By</Form.Label>
                        <Form.Select
                            name="searchBy"
                            className="mb-3"
                            {...register("searchBy")}
                        >
                            <option value="title">Title</option>
                            <option value="tags">Tags</option>
                            <option value="artistOrCulture">Artist or Culture</option>
                        </Form.Select>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Geo Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                name="geoLocation"
                                {...register("geoLocation")}
                            />
                            <Form.Text className="form-label-muted">
                                Case Sensitive String (e.g. &quot;Europe&quot;, &quot;France&quot;, &quot;Paris&quot;, &quot;China&quot;, &quot;New York&quot;, etc.), with multiple values separated by the | operator.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Medium</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                name="medium"
                                {...register("medium")}
                            />
                            <Form.Text className="form-label-muted">
                                Case Sensitive String (e.g. &quot;Ceramics&quot;, &quot;Furniture&quot;, &quot;Paintings&quot;, &quot;Sculpture&quot;, &quot;Textiles&quot;, etc.), with multiple values separated by the | operator.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Check
                            className="form-label"
                            type="checkbox"
                            label="Highlighted"
                            name="isHighlight"
                            {...register("isHighlight")}
                        />
                        <Form.Check
                            className="form-label"
                            type="checkbox"
                            label="Currently on View"
                            name="isOnView"
                            {...register("isOnView")}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default AdvancedSearch;
