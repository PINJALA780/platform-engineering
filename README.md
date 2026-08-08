# Platform Engineering Internal Developer Platform

An Internal Developer Platform (IDP) built with **Backstage** to provide developers with a self-service workflow for creating, documenting, building, deploying, and monitoring applications.

The platform integrates **Backstage, GitHub, GitHub Actions, Docker, Docker Hub, Kubernetes, Amazon EKS, Argo CD, Crossplane, TechDocs, and Datadog** into a unified developer experience.

---

## Table of Contents

* [Overview](#overview)
* [Project Goals](#project-goals)
* [Architecture](#architecture)
* [Technology Stack](#technology-stack)
* [Developer Workflow](#developer-workflow)
* [Backstage](#backstage)
* [Software Catalog](#software-catalog)
* [Software Templates](#software-templates)
* [Python FastAPI Template](#python-fastapi-template)
* [TechDocs](#techdocs)
* [GitHub Integration](#github-integration)
* [CI/CD Pipeline](#cicd-pipeline)
* [Docker and Docker Hub](#docker-and-docker-hub)
* [Kubernetes](#kubernetes)
* [Amazon EKS](#amazon-eks)
* [Argo CD and GitOps](#argo-cd-and-gitops)
* [Crossplane](#crossplane)
* [Datadog](#datadog)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Verification](#verification)
* [Screenshots](#screenshots)
* [Current Platform Status](#current-platform-status)
* [Future Enhancements](#future-enhancements)
* [Conclusion](#conclusion)

---

# Overview

This project implements a complete Internal Developer Platform designed to simplify the application development and deployment lifecycle.

The platform provides developers with a single interface through Backstage to:

* Discover services
* Create new applications
* Generate standardized project structures
* Create GitHub repositories
* Generate documentation
* Run automated CI/CD pipelines
* Build Docker images
* Push images to Docker Hub
* Deploy applications to Kubernetes
* Manage deployments through Argo CD
* Provision cloud infrastructure through Crossplane
* Monitor applications and infrastructure through Datadog

The overall platform workflow is:

```text
Developer
    |
    v
+----------------------+
|      Backstage       |
| Internal Developer   |
|       Portal         |
+----------+-----------+
           |
           v
   Software Template
           |
           v
    Python FastAPI
      Microservice
           |
           v
      GitHub Repo
           |
           v
    GitHub Actions
           |
           +----------------+
           |                |
           v                v
       Unit Tests      Docker Build
                            |
                            v
                       Docker Hub
                            |
                            v
                         Argo CD
                            |
                            v
                    Kubernetes / EKS
                            |
                            v
                       Application
                            |
                            v
                         Datadog
```

---

# Project Goals

The main goals of the platform are:

* Build a self-service Internal Developer Platform
* Standardize application creation
* Reduce manual DevOps tasks
* Provide reusable application templates
* Automatically create GitHub repositories
* Provide centralized service discovery
* Provide integrated technical documentation
* Automate application testing
* Automate Docker image creation
* Push container images to Docker Hub
* Deploy workloads to Kubernetes
* Implement GitOps using Argo CD
* Provision AWS resources using Crossplane
* Provide centralized monitoring using Datadog

---

# Architecture

The platform consists of several integrated layers.

```text
                         Developer
                             |
                             v
                    +----------------+
                    |    Backstage   |
                    |      IDP       |
                    +-------+--------+
                            |
             +--------------+--------------+
             |              |              |
             v              v              v
       Software        Software         TechDocs
        Catalog         Templates
             |              |
             |              v
             |        Python FastAPI
             |          Skeleton
             |              |
             |              v
             |         GitHub Repo
             |              |
             |              v
             |       GitHub Actions
             |              |
             |       +------+------+
             |       |             |
             v       v             v
          Catalog  Docker       Testing
                   Build
                     |
                     v
                 Docker Hub
                     |
                     v
                  Argo CD
                     |
                     v
               Kubernetes
                     |
                     v
                Amazon EKS
                     |
                     v
                  Datadog


Infrastructure Provisioning

            Kubernetes
                 |
                 v
            Crossplane
                 |
                 v
              AWS Cloud
```

---

# Technology Stack

| Technology     | Purpose                           |
| -------------- | --------------------------------- |
| Backstage      | Internal Developer Portal         |
| Python         | Application development           |
| FastAPI        | Microservice framework            |
| GitHub         | Source code management            |
| GitHub Actions | CI/CD automation                  |
| Docker         | Containerization                  |
| Docker Hub     | Container image registry          |
| Kubernetes     | Container orchestration           |
| Amazon EKS     | Managed Kubernetes                |
| Argo CD        | GitOps continuous delivery        |
| Crossplane     | Cloud infrastructure provisioning |
| TechDocs       | Developer documentation           |
| Datadog        | Monitoring and observability      |
| Helm           | Kubernetes packaging              |
| Yarn           | Node.js package management        |

---

# Developer Workflow

A developer can follow this workflow:

```text
1. Open Backstage
       |
       v
2. Select Software Template
       |
       v
3. Select Python FastAPI Template
       |
       v
4. Enter service information
       |
       v
5. Backstage generates project
       |
       v
6. GitHub repository created
       |
       v
7. Application source pushed
       |
       v
8. GitHub Actions starts
       |
       v
9. Unit tests
       |
       v
10. Docker image build
       |
       v
11. Push image to Docker Hub
       |
       v
12. Argo CD
       |
       v
13. Kubernetes / Amazon EKS
       |
       v
14. Datadog monitoring
```

---

# Backstage

Backstage is the central developer portal for the platform.

It provides:

* Software Catalog
* Software Templates
* Service discovery
* Ownership information
* Kubernetes integration
* TechDocs
* GitHub integration

The Backstage application is located under:

```text
packages/app/
packages/backend/
```

---

# Software Catalog

The Software Catalog provides a centralized inventory of applications and infrastructure.

Each application can contain:

* Name
* Description
* Owner
* Lifecycle
* System
* Kubernetes metadata
* TechDocs metadata

Example:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component

metadata:
  name: example-service
  description: Example FastAPI service

spec:
  type: service
  lifecycle: development
  owner: group:default/guests
```

## Software Catalog Screenshot

![Software Catalog](screenshots/software-catalog.png)

---

# Software Templates

Backstage Software Templates provide self-service application creation.

The platform includes a Python FastAPI microservice template.

The template generates:

* FastAPI application
* Dockerfile
* Kubernetes manifests
* GitHub Actions workflow
* Backstage catalog metadata
* TechDocs
* README
* Unit tests

## Software Templates Screenshot

![Software Templates](screenshots/software-templates.png)

---

# Python FastAPI Template

The Python FastAPI template is located at:

```text
templates/python-fastapi-service/
```

The template structure is:

```text
python-fastapi-service/
├── skeleton/
│   ├── .github/
│   │   └── workflows/
│   │       └── ci.yml
│   ├── app/
│   │   ├── __init__.py
│   │   └── main.py
│   ├── docs/
│   │   └── index.md
│   ├── k8s/
│   │   ├── configmap.yaml
│   │   ├── deployment.yaml
│   │   ├── namespace.yaml
│   │   └── service.yaml
│   ├── Dockerfile
│   ├── catalog-info.yaml
│   ├── mkdocs.yml
│   ├── README.md
│   └── requirements.txt
│
└── template.yaml
```

The template uses Backstage Scaffolder to generate a new application repository.

---

# GitHub Repository Generation

When the developer submits the template, Backstage creates a GitHub repository.

The generated repository contains:

* Application source code
* Dockerfile
* Kubernetes manifests
* CI/CD workflow
* Catalog metadata
* TechDocs
* Tests
* README

## Generated GitHub Repository

![GitHub Repository Generation](screenshots/github-repo-generate.png)

---

# TechDocs

TechDocs provides developer documentation directly inside Backstage.

Each generated application contains:

```text
docs/
└── index.md

mkdocs.yml
```

The Backstage catalog metadata contains:

```yaml
annotations:
  backstage.io/techdocs-ref: dir:.
```

The documentation can include:

* Application overview
* API information
* Service ownership
* Development information
* Architecture information

---

# CI/CD Pipeline

GitHub Actions is used to automate the application build pipeline.

The workflow performs:

```text
GitHub Push
     |
     v
GitHub Actions
     |
     +--> Checkout
     |
     +--> Setup Python
     |
     +--> Install Dependencies
     |
     +--> Run Unit Tests
     |
     +--> Docker Login
     |
     +--> Docker Build
     |
     +--> Docker Push
     |
     v
Docker Hub
```

## GitHub Actions

![GitHub Actions](screenshots/github-actions-success.png)

---

# Docker and Docker Hub

The FastAPI application is packaged as a Docker image.

The image contains:

* Python 3.12 runtime
* FastAPI application
* Application dependencies
* TechDocs
* Backstage catalog metadata

The CI/CD workflow builds the image and pushes it to Docker Hub.

```text
GitHub
   |
   v
GitHub Actions
   |
   v
Docker Build
   |
   v
Docker Image
   |
   v
Docker Hub
```

## Docker Hub

![Docker Hub Image](screenshots/docker-hub-image.png)

---

# Kubernetes

The generated application contains Kubernetes manifests.

```text
k8s/
├── namespace.yaml
├── configmap.yaml
├── deployment.yaml
└── service.yaml
```

The Kubernetes Deployment manages application Pods.

The Service provides networking for the application.

The ConfigMap provides application configuration.

## Kubernetes Pods

![Kubernetes Pods](screenshots/kubernetes-pods.png)

---

# Amazon EKS

Amazon EKS provides the managed Kubernetes environment for the platform.

The cluster hosts:

* Application workloads
* Argo CD
* Crossplane
* Metrics Server
* Kubernetes system components

Example verification:

```bash
kubectl get pods -A
```

```bash
kubectl get deployments -A
```

```bash
kubectl get svc -A
```

---

# Argo CD and GitOps

Argo CD provides GitOps-based application deployment.

The deployment flow is:

```text
Git Repository
      |
      v
   Argo CD
      |
      v
Kubernetes Cluster
      |
      v
Application
```

Argo CD continuously monitors the desired state and synchronizes Kubernetes resources.

The platform includes:

* Argo CD Server
* Application Controller
* ApplicationSet Controller
* Repository Server
* Notifications Controller
* Redis
* Dex

## Argo CD Synced and Healthy

![Argo CD Synced and Healthy](screenshots/argocd-synced-healthy.png)

---

# Crossplane

Crossplane provides Kubernetes-native infrastructure provisioning.

The platform uses Crossplane with AWS providers.

The current environment includes:

```text
crossplane-system/
├── Crossplane
├── AWS Provider
├── AWS Provider Family
└── AWS S3 Provider
```

The infrastructure workflow is:

```text
Developer / Platform Engineer
            |
            v
    Kubernetes Resource
            |
            v
        Crossplane
            |
            v
       AWS Provider
            |
            v
            AWS
```

## Crossplane Resource Creation

![Crossplane Creation](screenshots/crossplane-creation.png)

## Crossplane Resources

![Crossplane Resources](screenshots/crossplane-resources.png)

---

# Datadog

Datadog is used for platform and application monitoring.

Monitoring provides visibility into:

* Kubernetes workloads
* Application health
* Infrastructure
* Resource utilization
* Application metrics
* Platform operations

The monitoring flow is:

```text
Application
     |
     v
Kubernetes / EKS
     |
     v
Datadog
     |
     +--> Metrics
     +--> Dashboards
     +--> Monitoring
     +--> Observability
```

## Datadog Dashboard

![Datadog Dashboard](screenshots/datadog-dashboard.png)

---

# Project Structure

The main project structure is:

```text
platform-engineering/
└── backstage/
    └── platform-portal/
        |
        ├── argocd/
        |
        ├── crossplane/
        |
        ├── docs/
        |
        ├── examples/
        |
        ├── packages/
        |   ├── app/
        |   └── backend/
        |
        ├── templates/
        |   ├── python-fastapi-service/
        |   └── crossplane-s3/
        |
        ├── screenshots/
        |
        ├── app-config.yaml
        ├── app-config.production.yaml
        ├── catalog-info.yaml
        ├── mkdocs.yml
        ├── package.json
        ├── README.md
        └── yarn.lock
```

---

# Generated Application Structure

A generated FastAPI service follows:

```text
service/
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── app/
│   ├── __init__.py
│   └── main.py
│
├── docs/
│   └── index.md
│
├── k8s/
│   ├── configmap.yaml
│   ├── deployment.yaml
│   ├── namespace.yaml
│   └── service.yaml
│
├── tests/
│   └── test_main.py
│
├── Dockerfile
├── catalog-info.yaml
├── mkdocs.yml
├── README.md
└── requirements.txt
```

---

# Getting Started

## Prerequisites

Install:

* Node.js 20+
* Yarn
* Git
* Docker
* kubectl
* AWS CLI
* Kubernetes cluster
* GitHub account
* AWS account

---

## Clone the Repository

```bash
git clone https://github.com/PINJALA780/platform-engineering.git
```

Navigate to the Backstage application:

```bash
cd platform-engineering/backstage/platform-portal
```

---

## Install Dependencies

```bash
yarn install
```

---

## Start Backstage

```bash
yarn start
```

Backstage is available locally at:

```text
http://localhost:3000
```

---

# Kubernetes Verification

Check all Pods:

```bash
kubectl get pods -A
```

Check Deployments:

```bash
kubectl get deployments -A
```

Check Services:

```bash
kubectl get svc -A
```

---

# Argo CD Verification

Check Argo CD Pods:

```bash
kubectl get pods -n argocd
```

Check Applications:

```bash
kubectl get applications -n argocd
```

Example:

```text
NAME                   SYNC STATUS   HEALTH STATUS
crossplane-resources   Synced        Healthy
```

Check ApplicationSets:

```bash
kubectl get applicationsets -n argocd
```

---

# Crossplane Verification

Check Crossplane:

```bash
kubectl get pods -n crossplane-system
```

Check providers:

```bash
kubectl get providers
```

Check managed resources:

```bash
kubectl get managed
```

---

# Complete Platform Workflow

The complete application lifecycle is:

```text
                     Developer
                         |
                         v
                  +-------------+
                  |  Backstage  |
                  +------+------+
                         |
                         v
                 Software Template
                         |
                         v
                 Python FastAPI App
                         |
                         v
                     GitHub
                         |
                         v
                  GitHub Actions
                         |
                +--------+--------+
                |                 |
                v                 v
            Unit Tests       Docker Build
                                  |
                                  v
                              Docker Hub
                                  |
                                  v
                               Argo CD
                                  |
                                  v
                            Kubernetes
                                  |
                                  v
                              Amazon EKS
                                  |
                                  v
                               Datadog
```

Infrastructure provisioning:

```text
Platform Engineer
       |
       v
 Kubernetes Resource
       |
       v
   Crossplane
       |
       v
    AWS Cloud
```

---

# Screenshots

The following screenshots demonstrate the implemented platform capabilities.

## Backstage Home

![Backstage Home](screenshots/backstage-home.png)

## Software Catalog

![Software Catalog](screenshots/software-catalog.png)

## Software Templates

![Software Templates](screenshots/software-templates.png)

## GitHub Repository Generation

![GitHub Repository Generation](screenshots/github-repo-generate.png)

## GitHub Actions

![GitHub Actions](screenshots/github-actions-success.png)

## Docker Hub

![Docker Hub](screenshots/docker-hub-image.png)

## Kubernetes

![Kubernetes](screenshots/kubernetes-pods.png)

## Argo CD

![Argo CD](screenshots/argocd-synced-healthy.png)

## Crossplane Creation

![Crossplane Creation](screenshots/crossplane-creation.png)

## Crossplane Resources

![Crossplane Resources](screenshots/crossplane-resources.png)

## Datadog

![Datadog Dashboard](screenshots/datadog-dashboard.png)

---

# Current Platform Status

| Component                    | Status    |
| ---------------------------- | --------- |
| Backstage                    | Completed |
| GitHub Authentication        | Completed |
| Software Catalog             | Completed |
| Software Templates           | Completed |
| Python FastAPI Template      | Completed |
| GitHub Repository Generation | Completed |
| Catalog Registration         | Completed |
| TechDocs                     | Completed |
| GitHub Actions               | Completed |
| Unit Testing                 | Completed |
| Docker Build                 | Completed |
| Docker Hub                   | Completed |
| Kubernetes                   | Completed |
| Amazon EKS                   | Completed |
| Argo CD                      | Completed |
| ApplicationSet               | Completed |
| GitOps                       | Completed |
| Crossplane                   | Completed |
| AWS S3 Provider              | Completed |
| Datadog Monitoring           | Completed |

---

# Key Benefits

### Developer Self-Service

Developers can create standardized applications without manually configuring every DevOps component.

### Standardization

Applications generated from the template follow a consistent structure.

### Automation

The platform automates:

* Application creation
* Repository creation
* Testing
* Docker builds
* Container publishing
* Kubernetes deployment
* GitOps synchronization
* Infrastructure provisioning
* Monitoring

### GitOps

Argo CD provides declarative deployment and continuous synchronization.

### Infrastructure as Code

Crossplane allows infrastructure to be managed using Kubernetes-native resources.

### Observability

Datadog provides centralized monitoring and visibility.

---

# Future Enhancements

Potential future improvements include:

* Additional application templates
* Production authentication and authorization
* Helm-based deployments
* Ingress and TLS automation
* Horizontal Pod Autoscaling
* Vault integration
* External Secrets
* Additional Crossplane AWS resources
* Advanced Argo CD ApplicationSets
* Environment promotion workflows
* Automated rollback
* Advanced Datadog dashboards
* SLO and SLI monitoring
* Policy enforcement
* Security automation

---

# Conclusion

This project demonstrates a complete Internal Developer Platform built around Backstage.

The platform connects the complete application lifecycle:

```text
Application Creation
        |
        v
    Backstage
        |
        v
Software Template
        |
        v
      GitHub
        |
        v
 GitHub Actions
        |
        v
   Docker Hub
        |
        v
     Argo CD
        |
        v
Kubernetes / EKS
        |
        v
    Datadog
```

Infrastructure provisioning is handled through:

```text
Kubernetes
    |
    v
Crossplane
    |
    v
AWS
```

The result is a unified developer platform that combines **self-service application creation, software cataloging, documentation, CI/CD, containerization, Kubernetes, GitOps, cloud infrastructure provisioning, and observability** into one workflow.

