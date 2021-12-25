"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
const candidates = [
  {
    id: "1",
    name: "Lalit",
    skills: ["React", "JS"],
  },
  {
    id: "2",
    name: "Krishan",
    skills: ["Angular", "Node"],
  },
  {
    id: "1",
    name: "Aman",
    skills: ["React", "JS", "Mongo"],
  },
];

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

app.post("/candidates", function (req, res) {
  const { body } = req;
  if (body) {
    candidates.push(body);
    return res.status(200).send();
  } else {
    return res.status(400).send({ message: "Bad Request" });
  }
});

app.get("/candidates/search", function (req, res) {
  if (!candidates.length) return res.status(404).send();
  const { skills } = req.query;
  console.log(typeof skills);
  if (skills) {
    const skillsArray = skills.toString().split(",");
    console.log("===== skills= ===", skillsArray);
    const bestMatch = findBestCandidate(skillsArray);
    if (Object.keys(bestMatch).length) {
      return res.status(200).send(bestMatch);
    }
    return res.status(404).send();
  } else {
    return res.status(400).send();
  }
});

function findBestCandidate(requestedSkills) {
  let bestMatchFound = 0;
  let bestMatchCandidate = {};
  const requestedSkillMap = {};
  for (let reqSkill of requestedSkills) {
    requestedSkillMap[reqSkill] = 1;
  }
  console.log("requestedSkillMap", requestedSkillMap);

  for (let candidate of candidates) {
    let count = 0;
    candidate.skills.forEach((skill) => {
      if (requestedSkillMap[skill]) count++;
    });
    if (bestMatchFound < count) {
      bestMatchCandidate = candidate;
      bestMatchFound = count;
    }
  }
  return bestMatchCandidate;
}

app.listen(process.env.HTTP_PORT || 3000);
