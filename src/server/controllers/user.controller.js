import { CREATED } from 'http-status';
import { UserService } from 'server/services';
import { NotFound } from 'utils/errors/NotFound';

class UserController {
  static async create(req, res, next) {
    try {
      const { enabled, roles } = req.body;
      const newUser = await UserService.create(enabled, roles);
      res.locals.status = CREATED;
      res.locals.data = newUser;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async get(req, res, next) {
    try {
      const { userId } = req.params;
      const userObject = await UserService.get(userId);
      if (!userObject) {
        throw new NotFound(`User with primary key ${userId} not found`);
      }
      res.locals.data = userObject;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const filters = { ...req.query };
      const allUsers = await UserService.getAll(filters);
      res.locals.data = allUsers;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { userId } = req.params;
      const { enabled, roles } = req.body;

      const updatedUser = await UserService.update(userId, enabled, roles);

      res.locals.data = updatedUser;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async partialUpdate(req, res, next) {
    try {
      const { userId } = req.params;
      const { enabled, roles } = req.body;

      const updatedUser = await UserService.partialUpdate(userId, enabled, roles);

      res.locals.data = updatedUser;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  static async destroy(req, res, next) {
    try {
      const { userId } = req.params;
      const userDelete = await UserService.destroy(userId);
      res.locals.data = userDelete;
      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export { UserController };
