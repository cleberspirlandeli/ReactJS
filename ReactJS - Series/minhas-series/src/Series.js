import React, { Component } from 'react'
import Api from './Api'


const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class Series extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            series: []
        }

        this.renderSeries = this.renderSeries.bind(this)
        this.loadData = this.loadData.bind(this)

    }

    loadData() {
        this.setState({ isLoading: true })
        Api.loadSeriesByGenre(this.props.match.params.genre)
            .then((res) => {
                this.setState({
                    isLoading: false,
                    series: res.data
                })
            })
    }

    componentDidMount(){
        this.loadData()
    }

    deleteSeries(id){
        Api.deleteSeries(id)
        .then((res)=>{
            this.loadData()
        })

    }

    renderSeries(series) {
        return (
            <div className="item  col-xs-4 col-lg-4">
                <div className="thumbnail">
                    <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                    <div className="caption">
                        <h4 className="group inner list-group-item-heading">
                            {series.name}</h4>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <p className="lead">
                                    {series.genre} / {statuses[series.status]}</p>
                            </div>
                            <p></p>
                            <div className="col-xs-12 col-md-6">
                                <a className="btn btn-success" href="">Editar</a>
                                <a className="btn btn-danger" onClick={() => this.deleteSeries(series.id)}>Excluir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section id="intro"
                className="intro-section">
                <h1> Séries {this.props.match.params.genre} </h1>
                {
                    this.state.isLoading &&
                    <p>Carregando, aguarde...</p>
                }
                {
                    !this.state.isLoading && this.state.series.length === 0 &&
                    <div className="alert alert-info">
                        Nenhuma série cadastrada.
                    </div>
                }
                <div id="series" className="row list-group">
                    {
                        !this.state.isLoading &&
                        this.state.series.map(this.renderSeries)
                    }
                </div>
            </section>
        )
    }
}

export default Series