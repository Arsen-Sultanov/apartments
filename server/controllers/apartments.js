
import { json } from 'body-parser';
import { Apartments } from '../models';

const list = async (req, res, next) => {
  try {
    const skip = parseInt(req.query.skip) || 0;
    const limit = parseInt(req.query.limit) || 15;
    const sortField = req.query.sortfield || 'rating';
    const sortDir = req.query.sortdir === 'desc' ? -1 : 1;

    const $and = [];
    req.query.name && $and.push({ name: { $regex: new RegExp(req.query.name, 'i') } });
    req.query.address && $and.push({ address: { $regex: new RegExp(req.query.address, 'i') } });
    req.query.rooms && $and.push({ rooms: req.query.rooms });
    req.query.floors && $and.push({ floors: req.query.floors });
    req.query.type && $and.push({ type: req.query.type });
    req.query.coststart && $and.push({ cost: { $gt: +req.query.coststart } });
    req.query.costend && $and.push({ cost: { $lte: +req.query.costend } });

    const page = [
      { $skip: skip },
      { $limit: limit },
      {
        $sort: {
          [sortField]: sortDir
        }
      }
    ];

    $and.length && page.unshift({ $match: { $and } });

    const qery = [
      {
        $facet: {
          page,
          count: [
            {
              $count: 'count'
            }
          ]
        }
      }
    ];


    const qeryResult = await Apartments.aggregate(qery);

    console.log($and, JSON.stringify(qery));

    const countedPages = Math.ceil(qeryResult[0].count[0].count / limit);
    console.log(qeryResult);

    res.status(200).send({
      page: qeryResult[0].page,
      countedPages
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
