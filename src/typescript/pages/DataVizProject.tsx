import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableauReport from 'tableau-react';
import {Container, ListGroup, ListGroupItem, Col} from "react-bootstrap";
import "../../static/css/pages/DataVizProject.css";

function DataVizProject() {

    let worldSuicides = <ListGroupItem className="tableau-list-item">
        <Container>
            <TableauReport
                options={{
                    hideTabs: true,
                }}
                url="https://public.tableau.com/views/DataVizFinal_16047841003180/WorldSuicides?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            />
        </Container>
    </ListGroupItem>;

    let treeMap = <ListGroupItem className="tableau-list-item">
        <Container>
            <TableauReport
                options={{
                    hideTabs: false
                }}
                url="https://public.tableau.com/views/DataVizFinal_16047841003180/TreemapDB?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            />
        </Container>
    </ListGroupItem>;

    let heatMapComparison = <ListGroupItem className="tableau-list-item">
        <Container>
            <TableauReport
                options={{
                    hideTabs: false
                }}
                url="https://public.tableau.com/views/DataVizFinal_16047841003180/GDPvsHDIHeatmaps?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            />
        </Container>
    </ListGroupItem>;

    let timeSeries = <ListGroupItem className="tableau-list-item">
        <Container>
            <TableauReport
                options={{
                    hideTabs: false
                }}
                url="https://public.tableau.com/views/DataVizFinal_16047841003180/TimeSeries?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            />
        </Container>
    </ListGroupItem>;

    let scatterPlots = <ListGroupItem className="tableau-list-item">
        <Container>
            <TableauReport
                options={{
                    hideTabs: false
                }}
                url="https://public.tableau.com/views/DataVizFinal_16047841003180/Scatterplots?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            />
        </Container>
    </ListGroupItem>;


    return (
        <Container className="align-items-center">
            <ListGroup className="tableau-report">
                {heatMapComparison}
                {worldSuicides}
                {treeMap}
                {scatterPlots}
                {timeSeries}
            </ListGroup>
        </Container>
    );
}

export default DataVizProject;
