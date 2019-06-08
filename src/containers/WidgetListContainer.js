import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from 'react-redux'
import WidgetService from '../services/WidgetService'

const service = WidgetService.getInstance();

const stateToPropMapper = state => ({
    widgets: state.widgets
})

const propsToDispatcher = dispatch => ({
    loadWidgets: () => {
        service
            .findAllWidgets()
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: widgets
            }))
    },
    updateWidget: widget => {
        dispatch({type: 'UPDATE_WIDGET', widget: widget})
    },
    deleteWidget: (wid) => {dispatch({type: 'DELETE_WIDGET', widgetId: wid})},
    /*  couldn't get RESTful server down, but kept in case;

        I get that the widgets are supposed to be taken from localhost:8080 but
        I couldn't really get that set-up to test in time.


        deleteWidget: (wid) => {
             service
                 .deleteWidget(wid)
                 .then(widgets => dispatch({
                     type: 'DELETE_WIDGET',
                     widgets: widgets
                 })),
         }*/
    createWidget: () => {
        dispatch({
            type: 'CREATE_WIDGET'
        })
    }
})

const WidgetListContainer = connect(
    stateToPropMapper, propsToDispatcher
)
(WidgetListComponent)

export default WidgetListContainer
