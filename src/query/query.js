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
