import WidgetService from '../services/WidgetService'

// reducer => state => store => provider => container => map to props => components
const widgetReducer = (state={widgets: WidgetService.getInstance().findAllWidgets()}, action) => {
    if(action.type === 'DELETE_WIDGET') {
        return {
            widgets: state.widgets.filter(widget => widget.id != action.widgetId)
        }
    } else if(action.type === 'CREATE_WIDGET') {
        return {
            widgets: [
                ...state.widgets,
                {
                    id: (new Date()).getTime(),
                    name: 'New Widget',
                    type: 'HEADING'
                }
            ]
        }
    } else if(action.type === 'UPDATE_WIDGET') {
        return {
            widgets: state.widgets.map(widget => widget.id == action.widget.id ? action.widget : widget)
        }
    }
    return state;
}

export default widgetReducer
