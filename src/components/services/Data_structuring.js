import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from '../layout/Header';

export class Data_structuring extends Component {
    render() {
        return (
            <div className="site-main">
                <Header/>
                {/* page-title */}
                <div className="ttm-page-title-row">
                    <div className="container-xl">
                    <div className="row">
                        <div className="col-md-12"> 
                        <div className="title-box text-center">
                            <div className="page-title-heading">
                            <h1 className="title">Nos services</h1>
                            </div>{/* /.page-title-captions */}
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                <div className="sidebar ttm-sidebar ttm-bgcolor-white clearfix">
                    <div className="container-xl">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-11 content-area order-lg-2">
                            {/* ttm-service-single-content-are */}
                            {/* ttm-service-single-content-are */}
                            <div className="ttm-service-single-content-area">
                                <div className="ttm-service-description">
                                    <div className="row">
                                        <div className="col-md-5">
                                        <div className="ttm_single_image-wrapper">
                                            <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-eighteen" />
                                        </div>
                                        </div>
                                        <div className="col-md-7">
                                        <h3 className="res-767-mt-20">Audit</h3>
                                        <p style={{textAlign: "justify"}}>Comme première étape notre mission consiste à analyser votre chaine de valeur
                                        industrielle afin d’identifier rapidement les sources de données et les axes
                                        d’améliorations.
                                        Nous explorons pour vous vos sources de donnés et leur qualité afin de garantir des
                                        données pertinentes et accessibles.
                                        </p>
                                        <p className="mb-0" style={{textAlign: "justify"}}> IDENTIFICATION SOURCES DE DONNEES.
                                         HYPOTHESES SUR DES NOUVEAUX AXES D’EXPLORATION POUR AMELIROATION DE
                                        PERFORMANCE.</p>
                                        </div>
                                    </div>
                                    {/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                    </div>
                                    {/* separator */}
                                    <div className="row mb-35">
                                        <div className="col-md-7">
                                        <h4>Préparation et prétraitement de données</h4>
                                        <p style={{textAlign: "justify"}}>Traitement, filtrage et nettoyage des données pour la mise en place de base de donnée
                                        structurée.
                                        Mise en place d’applications d’analyses statistiques et utilisation d’algorithmes de
                                        prétraitements permettant de générer de manière automatique des rapports pertinents
                                        et paramétrables.</p>
                                        <p style={{textAlign: "justify"}}> MISE EN PLACE DES COLLECTEURS DE DONNEE
                                         TRAITEMENT ET STRUCTURATION DES DONNEES
                                         GENERATION DE RAPPORTS INTELLIGENTS</p>
                                        </div>
                                        <div className="col-md-5">
                                        <div className="ttm_single_image-wrapper res-767-mt-20">
                                            <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-nineteen" />
                                        </div>
                                        </div>
                                    </div>
                                    {/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                    </div>
                                    {/* separator */}
                                    <div className="row mb-35">
                                        <div className="col-md-5">
                                        <div className="ttm_single_image-wrapper res-767-mt-20">
                                            <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-nineteen" />
                                        </div>
                                        </div>
                                        <div className="col-md-7">
                                        <h4>Analyse</h4>
                                        <p style={{textAlign: "justify"}}>L’exploitation des datas suppose de corréler les données pour les analyser et les
                                        consolider. Notre rôle dans cette étape est de s’appuyer sur les dernières
                                        innovations/techniques en terme d’analyse pour valoriser des données pertinentes afin
                                        d’optimiser les processus.</p>
                                        </div>
                                    </div>
                                    {/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                    </div>
                                    {/* separator */}
                                    <div className="row mb-35">
                                        <div className="col-md-7">
                                        <h4>Modélisation et prédiction</h4>
                                        <p style={{textAlign: "justify"}}>Développement de modèles de prédictions par des méthodes statistique classiques et
                                        Intelligence artificielle, Réseaux de neurones, AutoML.</p>
                                        </div>
                                        <div className="col-md-5">
                                        <div className="ttm_single_image-wrapper res-767-mt-20">
                                            <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-nineteen" />
                                        </div>
                                        </div>
                                    </div>
                                    {/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                    </div>
                                    {/* separator */}
                                    <div className="row mb-35">
                                        <div className="col-md-5">
                                        <div className="ttm_single_image-wrapper res-767-mt-20">
                                            <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-nineteen" />
                                        </div>
                                        </div>
                                        <div className="col-md-7">
                                        <h4>Optimisation</h4>
                                        <p style={{textAlign: "justify"}}>Les modèles obtenus permettent une optimisation des techniques de commandes et des
                                        paramètres de contrôle.</p>
                                        </div>
                                    </div>{/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                    </div>
                                    {/* separator */}
                                    <div className="row mb-35">
                                        <div className="col-md-7">
                                        <h4>R&amp;D</h4>
                                        <p style={{textAlign: "justify"}}>Nous vous accompagnons pour le développement d’un nouveau produit/service et les
                                        stratégies à suivre pour atteindre l’efficience de production. Cette étape sera
                                        accompagné d’experts métiers (data science) pour mener les travaux R&amp;D nécessaires
                                        à l’exploration de nouvelles pistes de performance.</p>
                                        </div>
                                        <div className="col-md-5">
                                        <div className="ttm_single_image-wrapper res-767-mt-20">
                                            <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-nineteen" />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ttm-service-single-content-are end */}
                        </div>
                        <div className="col-2 widget-area">
                        </div>
                    </div>{/* row end */}
                    </div>
                </div>
            </div>
            )
    }
}


export default Data_structuring;