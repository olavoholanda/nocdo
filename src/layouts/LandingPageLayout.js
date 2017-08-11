import React from "react";
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import {Col, Grid, Row} from "react-flexbox-grid";
import {white, blueGrey500} from "material-ui/styles/colors";
import FontIcon from "material-ui/FontIcon";

// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...

const style = {
    header: {
        background: "url(\"/images/lp_header_bg.png\")",
        minHeight: "100vh",
    },
    logo: {
        marginLeft: "5em",
        marginTop: "0.3em"
    },
    appBar: {
        backgroundColor: "rgba(255, 87, 34, 0.35)"
    },
    headerText:{
        textAlign: "right",
        marginTop: '10em',
        fontFamily: "'Roboto Condensed', sans-serif",
        color: white,
        fontSize: "1.5em",
        paddingRight: "2em"
    },
    headerForm:{
        marginTop: '10em',
        paddingLeft: "2em"
    }
};

function LandingPageLayout() {
    return (
        <div style={style.header}>
            <AppBar
                style={style.appBar}
                iconElementLeft={<img alt="Nocdo" style={style.logo} width="135px" src="/images/logo.png" />}
            />
            <Grid fluid style={{paddingLeft: 15, paddingRight: 15}}>
                <Row>
                    <Col style={style.headerText} md={6}>
                        <span style={{fontStyle: "italic"}}>O APLICATIVO QUE IRÁ DEIXAR</span>
                        <br/>
                        <span style={{fontFamily: "'Roboto', sans-serif", fontSize: "2em", fontWeight: "300"}}>SEU CONDOMÍNIO </span> <span style={{fontFamily: "'Roboto', sans-serif", fontSize: "2em", fontWeight: "bold"}}>SMART</span>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <span style={{fontWeight: "bold"}}>Conheça agora um novo jeito</span>
                        <br/>
                        <span style={{fontWeight: "bold"}}>de se conectar com seus vizinhos</span>
                    </Col>
                    <Col style={style.headerForm} md={6}>
                        <Paper style={{textAlign: "center", maxWidth: 400}}>
                            <img alt="Nocdo" style={{marginTop: "1em"}} width="200px" src="/images/logo_dark.png" />
                            <form style={{margin: "2em 1em", paddingBottom: 30}}>
                                <TextField
                                    hintText="Nome de Usuário"
                                    floatingLabelText="Nome de Usuário:"
                                    fullWidth={true}
                                    required
                                />
                                <TextField
                                    hintText="Senha"
                                    floatingLabelText="Senha:"
                                    fullWidth={true}
                                    type="password"
                                    required
                                />
                                <div style={{marginTop: "1em"}}>
                                    <a style={{float: 'left', marginTop: "0.5em", color: blueGrey500, textDecoration: "none"}} href="#">Esqueceu sua senha?</a>
                                    <RaisedButton
                                        style={{float: 'right'}}
                                        label="Entrar"
                                        type="submit"
                                        value="Post"
                                        secondary={true}
                                    />
                                </div>
                            </form>
                            <span style={{color:blueGrey500, fontStyle: "italic"}}> - ou - </span>
                            <br/>
                            <br/>
                            <RaisedButton
                                style={{marginBottom: "1em"}}
                                label="Entrar com Facebook"
                                href="#"
                                secondary={true}
                                icon={<FontIcon className="fa fa-facebook"/>}
                            />
                        </Paper>
                        <Paper style={{textAlign: "center", maxWidth: 400, marginTop: "1em"}}>
                            <div style={{padding: "1.5em"}}>
                                Não tem uma conta? <a style={{color: blueGrey500, textDecoration: "none"}} href="#">Cadastre-se</a>
                            </div>
                        </Paper>
                        <div style={{maxWidth: 400, marginTop: "1em"}}>
                            <img alt="Disponível na Google Play" style={{float: "left"}} width="150px" src="/images/store_badges/androidPortuguese.png" />
                            <img alt="Disponível na Apple Store" style={{float: "right"}} width="150px" src="/images/store_badges/iosPortuguese.png" />
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default LandingPageLayout