# Platform Engineering Internal Developer Platform

> **Production-grade Internal Developer Platform (IDP) built with Backstage**

An Internal Developer Platform designed to provide developers with a unified self-service experience for **application creation, software cataloging, documentation, CI/CD, containerization, Kubernetes deployment, GitOps, cloud infrastructure provisioning, and observability**.

The platform is centered around **Backstage** and integrates GitHub, GitHub Actions, Docker, Docker Hub, Kubernetes, Amazon EKS, Argo CD, Crossplane, TechDocs, and Datadog.

---

## Table of Contents

* [Overview](#overview)
* [Platform Objectives](#platform-objectives)
* [Architecture](#architecture)
* [Technology Stack](#technology-stack)
* [Platform Capabilities](#platform-capabilities)
* [Developer Experience](#developer-experience)
* [Application Lifecycle](#application-lifecycle)
* [Backstage](#backstage)
* [Software Catalog](#software-catalog)
* [Software Templates](#software-templates)
* [Python FastAPI Template](#python-fastapi-template)
* [GitHub Integration](#github-integration)
* [CI/CD](#cicd)
* [Docker](#docker)
* [Kubernetes](#kubernetes)
* [Amazon EKS](#amazon-eks)
* [Argo CD and GitOps](#argo-cd-and-gitops)
* [Crossplane](#crossplane)
* [TechDocs](#techdocs)
* [Datadog](#datadog)
* [Security](#security)
* [Repository Structure](#repository-structure)
* [Generated Application Structure](#generated-application-structure)
* [Prerequisites](#prerequisites)
* [Local Development](#local-development)
* [Kubernetes Verification](#kubernetes-verification)
* [Argo CD Verification](#argo-cd-verification)
* [Crossplane Verification](#crossplane-verification)
* [Screenshots](#screenshots)
* [Production Readiness](#production-readiness)
* [Future Enhancements](#future-enhancements)
* [Conclusion](#conclusion)

---

# Overview

The platform provides a standardized developer workflow through Backstage.

Instead of developers manually creating repositories, configuring CI pipelines, writing Dockerfiles, creating Kubernetes manifests, and registering applications, the platform provides a self-service workflow.

The high-level workflow is:

```text
Developer
    |
    v
+-----------------------+
|       Backstage       |
| Internal Developer    |
|       Platform        |
+-----------+-----------+
            |
            v
    Software Template
            |
            v
    Python FastAPI App
            |
            v
       GitHub Repo
            |
            v
     GitHub Actions
            |
       +----+----+
       |         |
       v         v
     Tests    Docker Build
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

Infrastructure provisioning follows a separate Kubernetes-native workflow:

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
         AWS Cloud
```

---

# Platform Objectives

The primary objectives are:

* Provide developer self-service
* Standardize application creation
* Reduce manual DevOps configuration
* Provide reusable application templates
* Automatically create GitHub repositories
* Provide centralized service discovery
* Provide ownership and metadata
* Provide integrated technical documentation
* Automate application testing
* Automate container image creation
* Publish container images to a registry
* Deploy applications to Kubernetes
* Implement GitOps using Argo CD
* Provision cloud infrastructure using Crossplane
* Provide centralized observability
* Establish a repeatable application delivery platform

---

# Architecture

```text
                              Developer
                                  |
                                  v
                       +---------------------+
                       |      Backstage      |
                       |       IDP           |
                       +----------+----------+
                                  |
              +-------------------+-------------------+
              |                   |                   |
              v                   v                   v
       Software Catalog    Software Templates      TechDocs
                                  |
                                  v
                         Python FastAPI Template
                                  |
                                  v
                             GitHub Repository
                                  |
                                  v
                          GitHub Actions CI
                                  |
                    +-------------+-------------+
                    |                           |
                    v                           v
               Unit Tests                  Docker Build
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

### Infrastructure Layer

```text
                         Kubernetes API
                               |
                               v
                          Crossplane
                               |
                    +----------+----------+
                    |          |          |
                    v          v          v
                   AWS        AWS        AWS
                   S3         VPC        EKS
```

---

# Technology Stack

| Technology                 | Purpose                           |
| -------------------------- | --------------------------------- |
| Backstage                  | Internal Developer Platform       |
| Backstage Software Catalog | Service discovery and ownership   |
| Backstage Scaffolder       | Self-service application creation |
| Python                     | Application runtime               |
| FastAPI                    | Microservice framework            |
| GitHub                     | Source control and repositories   |
| GitHub Actions             | CI/CD automation                  |
| Docker                     | Containerization                  |
| Docker Hub                 | Container registry                |
| Kubernetes                 | Container orchestration           |
| Amazon EKS                 | Managed Kubernetes                |
| Helm                       | Kubernetes application packaging  |
| Argo CD                    | GitOps continuous delivery        |
| Crossplane                 | Cloud infrastructure provisioning |
| TechDocs                   | Developer documentation           |
| Datadog                    | Monitoring and observability      |
| kubectl                    | Kubernetes management             |
| AWS CLI                    | AWS management                    |
| Yarn                       | JavaScript package management     |

---

# Platform Capabilities

## Developer Platform

The platform provides:

* Self-service application creation
* Software Catalog
* Software Templates
* GitHub integration
* TechDocs
* Kubernetes integration
* GitOps deployment
* Infrastructure provisioning
* Observability

## Application Platform

Generated applications include:

* FastAPI application
* Dockerfile
* Unit tests
* Kubernetes manifests
* GitHub Actions workflow
* Backstage catalog metadata
* TechDocs
* README

## Infrastructure Platform

Infrastructure automation includes:

* Kubernetes
* Amazon EKS
* Crossplane
* AWS providers
* AWS resource provisioning

---

# Developer Experience

The intended developer experience is:

```text
1. Developer opens Backstage
             |
             v
2. Selects Software Template
             |
             v
3. Selects Python FastAPI Service
             |
             v
4. Enters service details
             |
             v
5. Backstage generates application
             |
             v
6. GitHub repository is created
             |
             v
7. GitHub Actions starts CI
             |
             v
8. Tests execute
             |
             v
9. Docker image is built
             |
             v
10. Image is published
             |
             v
11. Argo CD deploys application
             |
             v
12. Kubernetes runs workload
             |
             v
13. Datadog provides observability
```

The objective is to make application delivery a **self-service platform capability** rather than a collection of manual DevOps tasks.

---

# Application Lifecycle

```text
CREATE
  |
  v
BACKSTAGE TEMPLATE
  |
  v
GITHUB
  |
  v
CI
  |
  +--> Unit Tests
  |
  +--> Build
  |
  +--> Container
  |
  v
REGISTRY
  |
  v
GITOPS
  |
  v
ARGO CD
  |
  v
KUBERNETES
  |
  v
EKS
  |
  v
OBSERVABILITY
```

---

# Backstage

Backstage acts as the central Internal Developer Platform.

The application is primarily organized into:

```text
packages/app/
packages/backend/
```

Backstage provides the developer-facing interface for:

* Catalog
* Templates
* Documentation
* Kubernetes resources
* Application metadata
* Ownership
* Platform workflows

---

# Software Catalog

The Software Catalog provides a centralized inventory of services and platform resources.

A component can contain:

* Name
* Description
* Owner
* Lifecycle
* Type
* System
* Kubernetes annotations
* TechDocs annotations

Example:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component

metadata:
  name: example-service
  description: Example FastAPI service

  annotations:
    backstage.io/techdocs-ref: dir:.
    backstage.io/kubernetes-id: example-service
    backstage.io/kubernetes-namespace: example-service

spec:
  type: service
  lifecycle: development
  owner: group:default/guests
```

The Kubernetes annotation allows Backstage to associate the catalog entity with Kubernetes resources.

---

# Software Templates

Backstage Software Templates provide self-service project generation.

The platform includes a Python FastAPI service template.

Template location:

```text
templates/python-fastapi-service/
```

The template generates a standardized application structure and can create a GitHub repository.

The workflow is:

```text
Backstage
    |
    v
Software Template
    |
    v
Fetch Skeleton
    |
    v
Generate Application
    |
    v
Create GitHub Repository
    |
    v
Register Catalog Entity
```

---

# Python FastAPI Template

The Python FastAPI template provides a standardized microservice foundation.

Template structure:

```text
templates/python-fastapi-service/
├── template.yaml
└── skeleton/
    ├── .github/
    │   └── workflows/
    │       └── ci.yml
    ├── app/
    │   ├── __init__.py
    │   └── main.py
    ├── docs/
    │   └── index.md
    ├── k8s/
    │   ├── configmap.yaml
    │   ├── deployment.yaml
    │   ├── namespace.yaml
    │   └── service.yaml
    ├── Dockerfile
    ├── catalog-info.yaml
    ├── mkdocs.yml
    ├── README.md
    └── requirements.txt
```

The generated project is designed to provide a consistent baseline for new services.

---

# GitHub Integration

GitHub is used for source control and repository automation.

The Backstage template can create a repository using the GitHub Scaffolder action.

Generated repositories contain:

```text
Application Source
        |
        +--> Dockerfile
        |
        +--> Tests
        |
        +--> Kubernetes
        |
        +--> GitHub Actions
        |
        +--> catalog-info.yaml
        |
        +--> TechDocs
        |
        +--> README
```

This removes repetitive repository setup work from developers.

---

# CI/CD

GitHub Actions provides automated CI/CD.

The general pipeline is:

```text
Git Push
   |
   v
GitHub Actions
   |
   +--> Checkout
   |
   +--> Python Setup
   |
   +--> Dependency Installation
   |
   +--> Unit Tests
   |
   +--> Docker Build
   |
   +--> Registry Login
   |
   +--> Docker Push
   |
   v
Container Registry
```

The pipeline is intended to provide repeatable and automated application validation and packaging.

---

# Container Security

Container security is part of the platform's CI/CD strategy.

The platform can integrate vulnerability scanning into CI before an image is promoted.

A typical security flow is:

```text
Source Code
     |
     v
Build
     |
     v
Container Image
     |
     v
Security Scan
     |
     +---- Vulnerabilities ----> Fail / Remediate
     |
     v
Approved Image
     |
     v
Registry
```

Dependency vulnerabilities should be resolved by upgrading the affected packages to fixed versions rather than simply ignoring scanner results.

Security scanners should be treated as a **quality gate**.

---

# Docker

The generated FastAPI service is containerized using Docker.

Example container flow:

```text
FastAPI Application
        |
        v
     Dockerfile
        |
        v
   Docker Build
        |
        v
  Container Image
        |
        v
   Docker Registry
```

The container exposes:

```text
8000
```

The application is intended to expose a health endpoint that can be used by container and Kubernetes health checks.

---

# Kubernetes

Kubernetes is the application orchestration layer.

Generated applications can include:

```text
k8s/
├── namespace.yaml
├── configmap.yaml
├── deployment.yaml
└── service.yaml
```

The Deployment manages application Pods.

The Service provides network access to the workload.

The ConfigMap provides non-sensitive configuration.

For sensitive configuration, Kubernetes Secrets or an external secret-management system should be used instead of committing credentials to Git.

---

# Amazon EKS

Amazon EKS is the managed Kubernetes target for production workloads.

The intended architecture is:

```text
AWS
 |
 +--> Amazon EKS
       |
       +--> Application Workloads
       |
       +--> Argo CD
       |
       +--> Crossplane
       |
       +--> Platform Services
```

Useful verification commands:

```bash
kubectl get nodes
```

```bash
kubectl get pods -A
```

```bash
kubectl get deployments -A
```

```bash
kubectl get services -A
```

---

# Argo CD and GitOps

Argo CD provides GitOps-based deployment.

The desired state is stored in Git and Argo CD synchronizes Kubernetes with that state.

```text
Git Repository
      |
      v
    Argo CD
      |
      v
Desired Kubernetes State
      |
      v
 Kubernetes Cluster
```

The GitOps model provides:

* Declarative deployments
* Version-controlled configuration
* Continuous synchronization
* Drift detection
* Deployment visibility
* Rollback through Git history

Verification:

```bash
kubectl get pods -n argocd
```

```bash
kubectl get applications -n argocd
```

```bash
kubectl get applicationsets -n argocd
```

---

# Crossplane

Crossplane provides Kubernetes-native infrastructure provisioning.

Instead of requiring platform users to manually execute cloud provisioning commands, infrastructure can be represented as Kubernetes resources.

```text
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

The repository contains Crossplane configuration under:

```text
crossplane/
```

Provider verification:

```bash
kubectl get providers
```

```bash
kubectl get managed
```

```bash
kubectl get pods -n crossplane-system
```

---

# TechDocs

TechDocs integrates technical documentation directly into Backstage.

Generated applications contain:

```text
docs/
└── index.md

mkdocs.yml
```

The catalog entity contains:

```yaml
annotations:
  backstage.io/techdocs-ref: dir:.
```

Documentation can include:

* Service overview
* API information
* Architecture
* Ownership
* Development instructions
* Operational information

---

# Datadog

Datadog provides observability for the platform and workloads.

The observability layer is intended to provide:

* Application monitoring
* Kubernetes monitoring
* Infrastructure metrics
* Resource utilization
* Dashboards
* Operational visibility

Architecture:

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

---

# Security

Security is a core requirement for a production-grade platform.

## Secrets

Never commit:

* AWS access keys
* AWS secret keys
* GitHub tokens
* Docker Hub passwords
* API keys
* Private certificates
* Kubernetes service-account tokens
* Database passwords

Sensitive values should be supplied through:

* GitHub Actions Secrets
* AWS IAM
* Kubernetes Secrets
* External Secrets
* Vault
* Cloud-native secret managers

For example:

```yaml
env:
  DOCKER_USERNAME: ${{ secrets.DOCKER_USERNAME }}
  DOCKER_PASSWORD: ${{ secrets.DOCKER_PASSWORD }}
```

Credentials must never be hardcoded into source files.

## Container Security

Container images should be scanned before deployment.

## Least Privilege

Platform components should use the minimum permissions required.

## GitOps

Production deployment configuration should be version-controlled and auditable.

---

# Repository Structure

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
        │   ├── app/
        │   └── backend/
        |
        ├── templates/
        │   ├── python-fastapi-service/
        │   └── crossplane-s3/
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

A generated FastAPI service follows this structure:

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

# Prerequisites

For local development:

* Node.js 20+
* Yarn 4.x
* Git
* Docker
* kubectl
* Helm
* Kubernetes
* AWS CLI

For cloud deployment:

* AWS account
* Amazon EKS cluster
* IAM configuration
* GitHub repository
* Container registry
* Argo CD
* Crossplane
* Appropriate AWS permissions

---

# Local Development

Clone the repository:

```bash
git clone https://github.com/PINJALA780/platform-engineering.git
```

Navigate to the Backstage application:

```bash
cd platform-engineering/backstage/platform-portal
```

Install dependencies:

```bash
yarn install
```

Start Backstage:

```bash
yarn start
```

Backstage normally runs at:

```text
http://localhost:3000
```

---

# Kubernetes Verification

Check cluster connectivity:

```bash
kubectl cluster-info
```

Check nodes:

```bash
kubectl get nodes
```

Check all workloads:

```bash
kubectl get pods -A
```

Check deployments:

```bash
kubectl get deployments -A
```

Check services:

```bash
kubectl get svc -A
```

---

# Argo CD Verification

```bash
kubectl get pods -n argocd
```

```bash
kubectl get applications -n argocd
```

```bash
kubectl get applicationsets -n argocd
```

A healthy application should report an appropriate synchronization and health state.

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
                 +---------+---------+
                 |                   |
                 v                   v
             Unit Tests         Docker Build
                                     |
                                     v
                               Security Scan
                                     |
                                     v
                                 Registry
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
                  Kubernetes API
                         |
                         v
                     Crossplane
                         |
                         v
                    AWS Provider
                         |
                         v
                      AWS Cloud
```

---

# Screenshots

The screenshots below demonstrate the implemented platform workflow.

> **Tip:** Clicking an image opens the full-size screenshot on GitHub.

## Backstage Home

[![Backstage Home](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/backstage-home.png)](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/backstage-home.png)

## Software Catalog

[![Software Catalog](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/software-catalog.png)](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/software-catalog.png)

## Software Templates

[![Software Templates](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/software-templates.png)](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/software-templates.png)

## GitHub Repository Generation

[![GitHub Repository Generation](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/github-repo-generate.png)](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/github-repo-generate.png)

## GitHub Actions

[![GitHub Actions](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/github-actions-success.png)](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/github-actions-success.png)

## Docker Hub

[![Docker Hub](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/docker-hub-image.png)](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/docker-hub-image.png)

## Kubernetes

[![Kubernetes Pods](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/kubernetes-pods.png)](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/kubernetes-pods.png)

## Argo CD

[![Argo CD](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/argocd-synced-healthy.png)](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/argocd-synced-healthy.png)

## Crossplane Creation

[![Crossplane Creation](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/crossplane-creation.png)](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/crossplane-creation.png)

## Crossplane Resources

[![Crossplane Resources](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/crossplane-resources.png)](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/crossplane-resources.png)

## Datadog Dashboard

[![Datadog Dashboard](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/datadog-dashboard.png)](https://github.com/PINJALA780/platform-engineering/blob/main/platform-engineering/backstage/platform-portal/screenshots/datadog-dashboard.png)

---

# Production Readiness

The platform is designed around production-grade engineering practices.

## Platform Engineering

* Self-service developer workflows
* Standardized templates
* Centralized service catalog
* Ownership metadata
* GitOps deployment
* Infrastructure as code

## Reliability

* Kubernetes orchestration
* Health checks
* Declarative deployments
* Git-based configuration
* Automated CI/CD

## Security

* Secret management
* IAM-based cloud access
* Container vulnerability scanning
* Least-privilege permissions
* GitOps auditability

## Observability

* Kubernetes monitoring
* Application monitoring
* Centralized dashboards
* Infrastructure visibility

## Maintainability

* Reusable templates
* Version-controlled configuration
* Documented workflows
* Modular platform components

---

# Environment Separation

A production platform should separate environments.

Recommended model:

```text
                 Platform
                    |
          +---------+---------+
          |                   |
       Staging             Production
          |                   |
          v                   v
      Kubernetes            EKS
          |                   |
          v                   v
      Argo CD              Argo CD
```

Environment-specific configuration should not be mixed into application source code.

Recommended environments:

```text
development
staging
production
```

Production infrastructure should use dedicated accounts, IAM roles, namespaces, clusters, and secrets where appropriate.

---

# Deployment Strategy

A recommended promotion workflow is:

```text
Developer
    |
    v
Feature Branch
    |
    v
Pull Request
    |
    v
CI Validation
    |
    +--> Unit Tests
    +--> Security Checks
    +--> Build
    |
    v
Merge
    |
    v
Development
    |
    v
Staging
    |
    v
Production
```

Argo CD can be used to implement environment-specific GitOps deployments.

---

# Operational Practices

For production operation, the platform should follow:

* Immutable container images
* Versioned releases
* Git-based configuration
* Automated health checks
* Centralized logs and metrics
* Least-privilege IAM
* Secret rotation
* Vulnerability remediation
* Disaster recovery planning
* Backup and restore procedures
* Infrastructure drift detection
* Controlled production access

---

# Future Enhancements

Planned or recommended improvements include:

* Additional application templates
* Production authentication and authorization
* RBAC for platform users
* Environment promotion workflows
* Helm-based deployment workflows
* Ingress and TLS automation
* Horizontal Pod Autoscaling
* Vault integration
* External Secrets
* Additional Crossplane compositions
* AWS VPC provisioning
* AWS EKS provisioning
* AWS RDS provisioning
* Advanced Argo CD ApplicationSets
* Automated rollback
* Progressive delivery
* SLO and SLI monitoring
* Advanced Datadog dashboards
* Policy enforcement
* Supply-chain security
* SBOM generation
* Image signing
* Admission control
* Disaster recovery automation

---

# Project Status

| Capability                   | Status      |
| ---------------------------- | ----------- |
| Backstage                    | Implemented |
| GitHub Authentication        | Implemented |
| Software Catalog             | Implemented |
| Software Templates           | Implemented |
| Python FastAPI Template      | Implemented |
| GitHub Repository Generation | Implemented |
| Catalog Registration         | Implemented |
| TechDocs                     | Implemented |
| GitHub Actions               | Implemented |
| Unit Testing                 | Implemented |
| Docker Build                 | Implemented |
| Docker Hub                   | Implemented |
| Kubernetes                   | Implemented |
| Amazon EKS Integration       | Implemented |
| Argo CD                      | Implemented |
| GitOps                       | Implemented |
| Crossplane                   | Implemented |
| AWS Provider Integration     | Implemented |
| Datadog Integration          | Implemented |

---

# Important Production Security Note

**Do not commit credentials to this repository.**

Before publishing or sharing the repository, verify:

```bash
git grep -n "aws_access_key_id"
```

```bash
git grep -n "aws_secret_access_key"
```

```bash
git grep -n "github_token"
```

```bash
git grep -n "password"
```

Also inspect untracked files:

```bash
git status
```

If a real AWS access key or secret has ever been committed, it should be considered compromised and rotated/revoked immediately.

Use GitHub Actions Secrets, AWS IAM roles, Kubernetes Secrets, Vault, or another dedicated secret-management solution instead.

---

# Conclusion

This project demonstrates an Internal Developer Platform that brings together the major stages of the modern application lifecycle.

```text
              SELF SERVICE
                   |
                   v
               Backstage
                   |
                   v
            Application Template
                   |
                   v
                GitHub
                   |
                   v
             GitHub Actions
                   |
                   v
          Build + Test + Security
                   |
                   v
              Container
                   |
                   v
               Registry
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

The resulting platform provides a unified foundation for:

* Developer self-service
* Standardized application creation
* Software cataloging
* Technical documentation
* CI/CD automation
* Containerization
* Kubernetes deployment
* GitOps
* Cloud infrastructure provisioning
* Observability
* Security automation

The overall goal is to provide developers with a **repeatable, automated, self-service path from application creation to production deployment**, while giving platform engineers centralized control over standards, infrastructure, security, and operations.
