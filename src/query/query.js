import { gql } from '@apollo/client';

export const getListFreelence = gql`
    query MyQuery {
        DijitalNinja_user {
            job
            job_images
            short_description
            id
        }
    }
`;

export const postDataUser = gql`
    mutation MyMutation($object: DijitalNinja_user_insert_input!) {
        insert_DijitalNinja_user_one(object: $object) {
            token
        }
    }
`;

export const getProductById = gql`
    query MyQuery($id: Int!) {
        DijitalNinja_user(where: { id: { _eq: $id } }) {
            education
            email
            full_name
            eta
            id
            job
            job_images
            phone
            pricing
            profile_image
            short_description
            tell_yourself
            createdAt
        }
    }
`;

export const postDataReview = gql`
    mutation MyMutation($object: DijitalNinja_review_insert_input!) {
        insert_DijitalNinja_review_one(object: $object) {
            user_id
        }
    }
`;

export const CheckTokenValid = gql`
    query MyQuery($id: Int!, $token: String = "") {
        DijitalNinja_user(where: { id: { _eq: $id }, _and: { token: { _eq: $token } } }) {
            id
            token
        }
    }
`;

export const EditData = gql`
    mutation MyMutation($id: Int!, $token: String!, $short_description: String!, $job: String!, $pricing: Int!) {
        update_DijitalNinja_user(
            where: { id: { _eq: $id }, _and: { token: { _eq: $token } } }
            _set: { short_description: $short_description, job: $job, pricing: $pricing }
        ) {
            returning {
                id
                full_name
                email
                createdAt
            }
        }
    }
`;

export const getReview = gql`
    query MyQuery($id: Int!) {
        DijitalNinja_user(where: { id: { _eq: $id } }) {
            reviews {
                id
                rating
                review_message
                reviewer_name
                user_id
                createdAt
            }
        }
    }
`;

export const deleteData = gql`
    mutation MyMutation($id: Int!) {
        delete_DijitalNinja_user_by_pk(id: $id) {
            id
        }
    }
`;
