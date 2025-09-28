pipeline{
    agent {
        docker {
            image 'node:22'
            args '-v $HOME/.npm:/root/.npm'
        }
    }

    environment {
        APP_NAME = "bconic-frontend"
        RELEASE = "1.0.0"
        DOCKER_USER = "jeralsandeeptha"
        DOCKER_PASS = 'dockerhub'
        IMAGE_NAME = "${DOCKER_USER}" + "/" + "${APP_NAME}"
        IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"
    }

    stages{
        stage("Clean Workspace"){
            steps{
                echo "========Executing Clean Workspace========"
                cleanWs();
            }
            post{
                success{
                    echo "========Clean Workspace executed successfully========"
                }
                failure{
                    echo "========Clean Workspace execution failed========"
                }
            }
        }
        stage("Verify Tools"){
            steps{
                echo "========Verify Tools Workspace========"
                sh 'node --version';
                sh 'npm --version';
                sh 'git --version';
            }
            post{
                success{
                    echo "========Verify Tools executed successfully========"
                }
                failure{
                    echo "========Verify Tools execution failed========"
                }
            }
        }
        stage("Checkout SCM"){
            steps{
                echo "========Executing Checkout SCM========"
                git branch: 'main', url: 'https://github.com/JeralSandeeptha/BConic-Frontend.git'
            }
            post{
                success{
                    echo "========Checkout SCM executed successfully========"
                }
                failure{
                    echo "========Checkout SCM execution failed========"
                }
            }
        }
        stage('Verify the Branch') {
          steps {
            sh 'git branch'
            sh 'git log -1 --oneline'
          }
        }
        stage("Install Dependencies"){
            steps{
                echo "========Install Dependencies========"
                sh 'npm ci';
            }
            post{
                success{
                    echo "========Install Dependencies executed successfully========"
                }
                failure{
                    echo "========Install Dependencies execution failed========"
                }
            }
        }
        stage("Unit Testing"){
            steps{
                echo "========Executing Unit Testing========"
                sh 'npm run test';
            }
            post{
                success{
                    echo "========Unit Testing executed successfully========"
                }
                failure{
                    echo "========Unit Testing execution failed========"
                }
            }
        }
        // stage("Code Quality Check"){
        //     steps{
        //         echo "========Executing Code Quality Check========"
        //     }
        //     post{
        //         success{
        //             echo "========Code Quality Check executed successfully========"
        //         }
        //         failure{
        //             echo "========Code Quality Check execution failed========"
        //         }
        //     }
        // }
        // stage("Build Project"){
        //     steps{
        //         echo "========Executing Build Project========"
        //         sh 'npm run build';
        //     }
        //     post{
        //         success{
        //             echo "========Build Project executed successfully========"
        //         }
        //         failure{
        //             echo "========Build Project execution failed========"
        //         }
        //     }
        // }
        // stage("Build Artifact"){
        //     steps{
        //         echo "========Executing Build Artifact========"
        //     }
        //     post{
        //         success{
        //             echo "========Build Artifact executed successfully========"
        //         }
        //         failure{
        //             echo "========Build Artifact execution failed========"
        //         }
        //     }
        // }
        // stage("Push Artifact"){
        //     steps{
        //         echo "========Push Build Artifact========"
        //     }
        //     post{
        //         success{
        //             echo "========Push Artifact executed successfully========"
        //         }
        //         failure{
        //             echo "========Push Artifact execution failed========"
        //         }
        //     }
        // }
    }
    post{
        always{
            echo "========Pipeline Finished========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}