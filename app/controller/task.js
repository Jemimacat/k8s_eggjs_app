'use strict';

const Controller = require('egg').Controller;
const dayjs = require('dayjs');

class TaskController extends Controller {

  async addNewTask() {
    const {ctx,app} = this;
    var newTask = ctx.request.body;
    
    // Add field "id"
    const lastId = await app.mysql.query(`
      SELECT
        MAX(id)
      FROM
        adminTaskList
    `);
    newTask.id = lastId[0]['MAX(id)'] + 1;
 
    // Write to MySQL
    var result = await app.mysql.insert('adminTaskList',newTask);

    // Validate mysql result
    var message = "";
    if (result.affectedRows === 1) {
      message = "Successed!"
    } else{
      message = "Failed!"
    }

    // return data to 
    ctx.body = message;
  }

  async addHistoryTask() {
    const {ctx,app} = this;
    var confirmedTask = ctx.request.body;
    
    // Add field "id"
    const lastId = await app.mysql.query(`
      SELECT
        MAX(id)
      FROM
        adminHistoryTaskList
    `);
    confirmedTask.id = lastId[0]['MAX(id)'] + 1;

    // Add field "runningNumber"
    const lastRunningNumber = await app.mysql.query(`
    SELECT
      MAX(runningNumber)
    FROM
      adminHistoryTaskList
    `);
    confirmedTask.runningNumber = lastRunningNumber[0]['MAX(runningNumber)'] + 1;
 
    // Write to MySQL
    var result = await app.mysql.insert('adminHistoryTaskList',confirmedTask);

    // Validate mysql result
    var message = "";
    if (result.affectedRows === 1) {
      message = "Archive Successed!"
    } else{
      message = "Archive Failed!"
    }
    console.log(message);

    // Update adminTask
    if (confirmedTask.taskStatus === "inactive"){
      const row = {
        id: confirmedTask.adminTaskId,
        taskStatus: "inactive",
        modifiedAt: app.mysql.literals.now,
      };
      const result = await app.mysql.update('adminTaskList', row);
    }else{
      // Next dueDate according to frequency
      let nextDueDate = "";
      if (confirmedTask.frequency === "每日提醒"){
        nextDueDate = dayjs(confirmedTask.dueDate).add(1,'day').format('YYYY-MM-DD');
      }else if (confirmedTask.frequency === "每周提醒"){
        nextDueDate = dayjs(confirmedTask.dueDate).add(7,'day').format('YYYY-MM-DD');
      }else if (confirmedTask.frequency === "每月提醒"){
        nextDueDate = dayjs(confirmedTask.dueDate).add(1,'month').format('YYYY-MM-DD');
      }else if (confirmedTask.frequency === "每季提醒"){
        nextDueDate = dayjs(confirmedTask.dueDate).add(3,'month').format('YYYY-MM-DD');
      }else if (confirmedTask.frequency === "每年提醒"){
        nextDueDate = dayjs(confirmedTask.dueDate).add(1,'year').format('YYYY-MM-DD');
      }
      let nextReminderDate = dayjs(nextDueDate).subtract(7,'day').format('YYYY-MM-DD');

      const row = {
        id: confirmedTask.adminTaskId,
        dueDate: nextDueDate,
        reminderDate: nextReminderDate,
      };
      const result = await app.mysql.update('adminTaskList', row);
    }
    const updateSuccess = result.affectedRows === 1;
    console.log(updateSuccess);

    ctx.body = message;
  }

  async updateTask() {
    const {ctx,app} = this;
    var updateTask = ctx.request.body;

    const adminTaskItem = await app.mysql.get('adminTaskList',{id: updateTask.id});
    if (updateTask !== adminTaskItem){
      const row = {
        id: updateTask.id,
        project: updateTask.project,
        usage: updateTask.usage,
        staffId: updateTask.staffId,
        staffName: updateTask.staffName,
        fromOrganization: updateTask.fromOrganization,
        amount: updateTask.amount,
        dueDate: updateTask.dueDate,
        frequency: updateTask.frequency,
        reminderDate: updateTask.reminderDate,
        remarks: updateTask.remarks,
        taskStatus: updateTask.taskStatus
      };
      const result = await app.mysql.update('adminTaskList', row);
      const updateSuccess = result.affectedRows === 1;
      console.log(updateSuccess);
      ctx.body = updateSuccess;
    }else{
      ctx.body = "No change!";
    }
    
  }


}

module.exports = TaskController;
