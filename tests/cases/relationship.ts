const should = require('should');
const {V1: Client} = require('../../../dist');
import FriendshipStatusResponse from "../../src/responses/friendship-status.response";

describe('`Relationship` class', () => {
    let session;

    before(() => {
        session = require('../../run').session;
    });

    it('responds to #muteStory', done => {
        Client.Relationship.muteStory(session, accountId)
            .then(response => {
                response.should.be.instanceOf(FriendshipStatusResponse);
                response.is_muted.should.equal(true);
            });
    });
});
