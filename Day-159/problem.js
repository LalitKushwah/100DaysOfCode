'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const candidates = [];

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

app.post("/candidates", function (req, res) {
  const { body } = req;
  let responseStatus = 400;
  if (body) {
    candidates.push(body);
    responseStatus = 200;
  }
  return res.status(responseStatus).send();
});

app.get("/candidates/search", function (req, res) {
  // when no candidate defined
  if (!candidates.length) return res.status(404).send();

  const { skills } = req.query;
  if(!skills) return res.status(400).send();
  
  // As typeof query will be string we can operate split method directly
  const requestedSkills = skills.split(",");
  const bestMatchCandidate = findBestCandidate(requestedSkills);

  // TODO: can use lodash for shorter syntax
  if (Object.keys(bestMatchCandidate).length) {
    return res.status(200).send(bestMatchCandidate);
  }
  return res.status(404).send();
});

function findBestCandidate(requestedSkills) {
  let bestMatchedSkillsCount = 0;
  let bestMatchCandidate = {};
  const requestedSkillMap = {};

  // prepare requested skill hash map 
  for (let reqSkill of requestedSkills) {
    requestedSkillMap[reqSkill] = 1;
  }
  for (let candidate of candidates) {
    let skillMatchedCount = 0;
    candidate.skills.forEach((skill) => {
      if (requestedSkillMap[skill]) skillMatchedCount++;
    });
    // update best match if current candidate has better match
    if (bestMatchedSkillsCount < skillMatchedCount) {
      bestMatchCandidate = candidate;
      bestMatchedSkillsCount = skillMatchedCount;
    }
  }
  return bestMatchCandidate;
}

app.listen(process.env.HTTP_PORT || 3000);
