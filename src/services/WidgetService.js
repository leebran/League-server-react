
export default class WidgetService {

    static myInstance = null;

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    findAllWidgets = () =>
        fetch("http://league-server-react.herokuapp.com/api/widgets")
            .then(response => response.json())

    findWidgetByUser = (userName, widgets) => {
        return widgets.find(widget => widget.name == userName)
    }


    deleteWidget = wid =>
        fetch(`http://league-server-react.herokuapp.com/api/widgets/${wid}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
}

