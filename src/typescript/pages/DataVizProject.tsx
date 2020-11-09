import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableauReport from 'tableau-react';
import {Container, ListGroup, ListGroupItem, Col} from "react-bootstrap";
import "../../static/css/pages/DataVizProject.css";

function DataVizProject() {
    return (
        <Container className="align-items-center">
            <ListGroup className="tableau-report">
                <ListGroupItem className="tableau-list-item">
                    <Container>
                        <TableauReport
                            options={{
                                hideTabs: true,
                            }}
                            url="https://public.tableau.com/views/DataVizFinal_16047841003180/WorldSuicides?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
                        />
                    </Container>
                </ListGroupItem>
                <ListGroupItem className="tableau-list-item">
                    <Container>
                        <TableauReport
                            options={{
                                hideTabs: false
                            }}
                            url="https://public.tableau.com/views/DataVizFinal_16047841003180/GDPvsHDIHeatmaps?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
                        />
                    </Container>
                </ListGroupItem>
                <ListGroupItem className="tableau-list-item">
                    <Container>
                        <TableauReport
                            options={{
                                hideTabs: false
                            }}
                            url="https://public.tableau.com/views/DataVizFinal_16047841003180/TimeSeries?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
                        />
                    </Container>
                </ListGroupItem>
                <ListGroupItem className="tableau-list-item">
                    <Container>
                        <TableauReport
                            options={{
                                hideTabs: false
                            }}
                            url="https://public.tableau.com/views/DataVizFinal_16047841003180/ScatterplotDb?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
                        />
                    </Container>
                </ListGroupItem>
            </ListGroup>
        </Container>
    );
}

export default DataVizProject;
