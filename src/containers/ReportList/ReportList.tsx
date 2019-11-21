import React from 'react';
import { connect } from 'react-redux';
import {
    Report,
    Element,
    fetchReports,
    blockMessage,
    resolveMessage,
} from '../../actions';
import { StoreState } from '../../reducers';
import { ListItem } from '../../components/ListItem';

interface ReportListProps {
    reports: Report;
    fetchReports: Function;
    blockMessage: Function;
    resolveMessage: Function;
}

interface ReportListState {
    fetching: boolean;
}

class _ReportList extends React.Component<ReportListProps> {
    state: ReportListState = { fetching: true };

    componentDidMount() {
        this.props.fetchReports();
    }

    componentDidUpdate(prevProps: ReportListProps): void {
        if (
            !prevProps.reports.elements.length &&
            this.props.reports.elements.length
        ) {
            this.setState({ fetching: false });
        }
    }

    onBlockClick = (event: { target: HTMLInputElement }): void => {
        this.props.blockMessage(event.target.id);
    };

    onResolveClick = (event: { target: HTMLInputElement }): void => {
        this.props.resolveMessage(event.target.id);
    };

    renderList(): JSX.Element[] {
        return this.props.reports.elements.map(
            ({ id, state, payload: { reportType, message } }: Element) => {
                const props = {
                    id,
                    state,
                    reportType,
                    message: message === null ? '-' : message,
                    onBlockClick: this.onBlockClick,
                    onResolveClick: this.onResolveClick,
                };
                return <ListItem key={id} {...props} />;
            }
        );
    }

    render() {
        return (
            <div>
                {this.state.fetching ? 'LOADING' : null}
                <h1>Reports ({this.props.reports.size})</h1>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = ({ reports }: StoreState): { reports: Report } => {
    return { reports };
};

export const ReportList = connect(mapStateToProps, {
    fetchReports,
    blockMessage,
    resolveMessage,
})(_ReportList);
