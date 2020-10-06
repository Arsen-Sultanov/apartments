import { Apartments } from '../models';

const list = async (req, res, next) => {
  try {
    const skip = parseInt(req.query.skip) || 0;
    const limit = parseInt(req.query.limit) || 15;
    const sortField = req.query.sortfield || 'rating';
    const sortDir = req.query.sortdir === 'desc' ? -1 : 1;

    const $match = {};
    req.query.name && ($match.name = { $regex: new RegExp(req.query.name, 'i') });
    req.query.address && ($match.address = { $regex: new RegExp(req.query.address, 'i') });
    req.query.rooms && ($match.rooms = req.query.rooms);
    req.query.floors && ($match.floors = req.query.floors);
    req.query.type && ($match.type = req.query.type);
    req.query.coststart && ($match.cost = { $gt: +req.query.coststart });
    req.query.costend && ($match.cost = { $lte: +req.query.costend });

    const page = [
      { $match },
      { $skip: skip },
      { $limit: limit },
      {
        $sort: {
          [sortField]: sortDir
        }
      }
    ];

    const count = [
      { $match },
      { $count: 'count' }
    ];

    const qery = [
      { $facet: { page, count } }
    ];

    const qeryResult = await Apartments.aggregate(qery);

    res.status(200).send({
      page: qeryResult[0].page,
      totalItemsCount: qeryResult[0].count[0].count
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const apartment = new Apartments(req.body);
    await apartment.save();
    res.status(200).send(apartment);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default {
  list,
  add
};
