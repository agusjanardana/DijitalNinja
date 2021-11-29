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
