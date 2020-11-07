import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableauReport from 'tableau-react';
import {Container, ListGroup, ListGroupItem} from "react-bootstrap";
import "../../static/css/components/DataVizProject.css";

function DataVizProject() {
    return (
        <Container className="align-items-center">
            <ListGroup className="tableau-report">
                <ListGroupItem className="tableau-list-item">
                    <TableauReport
                        options = {{
                            hideTabs: false
                        }}
                        url="https://public.tableau.com/views/DataVizFinal_16047841003180/WorldSuicideHeatmap?:language=en&:display_count=y&:origin=viz_share_link"
                    />
                </ListGroupItem>
                <ListGroupItem className="tableau-list-item">
                    <TableauReport
                        options = {{
                            hideTabs: false
                        }}
                        url="https://public.tableau.com/views/DataVizFinal_16047841003180/WorldGDPHeatmap?:language=en&:display_count=y&:origin=viz_share_link"
                    />
                </ListGroupItem>
                <ListGroupItem className="tableau-list-item">
                    <TableauReport
                        options = {{
                            hideTabs: false
                        }}
                        url="https://public.tableau.com/views/DataVizFinal_16047841003180/WorldHDIHeatmap?:language=en&:display_count=y&:origin=viz_share_link"
                    />
                </ListGroupItem>
                <ListGroupItem className="tableau-list-item">
                    <TableauReport
                        options = {{
                            hideTabs: false
                        }}
                        url="https://public.tableau.com/views/DataVizFinal_16047841003180/TrendLines?:language=en&:display_count=y&:origin=viz_share_link"
                    />
                </ListGroupItem>
            </ListGroup>
        </Container>
    );
}

export default DataVizProject;
